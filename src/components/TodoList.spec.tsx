import { describe, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { TodoList } from "./TodoList";
import { ApiService } from "../service/apiService";

describe("Add input box", () => {

    const mockApiService: ApiService = {
        addTodo: vi.fn(),
        getTodos: vi.fn(),
        editTodo: vi.fn(),
        deleteTodo: vi.fn()
    }

    const mockKeyGenerator = {
        generateKey: vi.fn(),
    }

    test('Should allow to insert input', async () => {

        render(<TodoList api={mockApiService} keyGenerator={mockKeyGenerator} />)

        // await getByRole('button', { hasText: "test label" }).click();
        // await getByRole('textbox').fill("a test string");
        
        // await userEvent.keyboard("{Enter}");
        // await userEvent.keyboard("{/Enter}");

        // await expect.element(getByRole('button', { hasText: "a test string" })).toBeInTheDocument();
    })
});

