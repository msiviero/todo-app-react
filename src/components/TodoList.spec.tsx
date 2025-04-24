import { afterEach, describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { TodoList } from "./TodoList";
import { ApiService } from "../service/apiService";
import { KeyGenerator } from "../service/keyService";
import { Todo } from "../model/todo";
import { userEvent } from "@vitest/browser/context";

describe("Todo list", () => {

    afterEach(() => vi.resetAllMocks());

    const mockApiService: ApiService = {
        addTodo: vi.fn(),
        getTodos: vi.fn(),
        editTodo: vi.fn(),
        deleteTodo: vi.fn()
    }

    const mockKeyGenerator: KeyGenerator = {
        generateKey: vi.fn(),
    }

    test("Should load available todos", async () => {

        const todos: Todo[] = [{
            key: "abc",
            title: "test 1",
            isCompleted: true,
        },
        {
            key: "def",
            title: "test 2",
            isCompleted: false,
        }];

        vi.mocked(mockApiService.getTodos).mockResolvedValue({ ok: true, data: todos, cause: "" });
        vi.mocked(mockKeyGenerator.generateKey).mockResolvedValue("xyz");

        const { getByText } = render(<TodoList api={mockApiService} keyGenerator={mockKeyGenerator} />);

        await expect.element(getByText("test 1")).toBeInTheDocument();
        await expect.element(getByText("test 2")).toBeInTheDocument();
    })

    test("Should allow to add a todo", async () => {

        const todos: Todo[] = [];

        vi.mocked(mockApiService.getTodos).mockResolvedValue({ ok: true, data: todos, cause: "" });
        vi.mocked(mockApiService.addTodo).mockResolvedValue({ ok: true, cause: "" });

        vi.mocked(mockKeyGenerator.generateKey).mockResolvedValue("xyz");

        const { getByRole } = render(<TodoList api={mockApiService} keyGenerator={mockKeyGenerator} />);

        await getByRole("textbox", { name: "title" }).fill("test 3");
        await getByRole("button", { name: "Add a todo" }).click();

        await expect.element(getByRole("row")).toBeInTheDocument();

        expect(mockKeyGenerator.generateKey).toBeCalledTimes(1);
    })

    test("Should allow to check a todo", async () => {

        const todos: Todo[] = [{
            key: "abc",
            title: "test 1",
            isCompleted: false,
        }];

        vi.mocked(mockApiService.getTodos).mockResolvedValue({ ok: true, data: todos, cause: "" });
        vi.mocked(mockApiService.editTodo).mockResolvedValue({ ok: true, cause: "" });

        const { getByRole } = render(<TodoList api={mockApiService} keyGenerator={mockKeyGenerator} />);

        await expect.element(getByRole("row")).toBeInTheDocument();
        await getByRole("checkbox").click();

        await expect.element(getByRole("checkbox")).toBeChecked();

        expect(mockApiService.editTodo).toBeCalledTimes(1);
        expect(mockApiService.editTodo).toHaveBeenCalledWith({
            key: "abc",
            title: "test 1",
            isCompleted: true,
        });
    })

    test("Should allow to edit a label", async () => {

        const todos: Todo[] = [{
            key: "abc",
            title: "test 1",
            isCompleted: false,
        }];

        vi.mocked(mockApiService.getTodos).mockResolvedValue({ ok: true, data: todos, cause: "" });
        vi.mocked(mockApiService.editTodo).mockResolvedValue({ ok: true, cause: "" });

        const { getByRole } = render(<TodoList api={mockApiService} keyGenerator={mockKeyGenerator} />);

        await expect.element(getByRole("row")).toBeInTheDocument();

        await getByRole("button", { name: "Edit todo title" }).click();
        await getByRole("row").getByRole("textbox", { name: "title" }).fill("test x");
        await userEvent.keyboard("{Enter}");
        await userEvent.keyboard("{/Enter}");

        await expect.element(getByRole("row").filter({ hasText: "test x" })).toBeInTheDocument();

        expect(mockApiService.editTodo).toBeCalledTimes(1);
        expect(mockApiService.editTodo).toHaveBeenCalledWith({
            key: "abc",
            title: "test x",
            isCompleted: false,
        });
    })
});
