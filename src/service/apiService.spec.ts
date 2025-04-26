import { describe, expect, test, vi } from "vitest";
import { httpClient, makeApiService } from "./apiService";

describe("Api service", () => {

    test('Should return a list of todos', async () => {
        vi.spyOn(httpClient, 'get').mockResolvedValue({
            status: 200,
            statusText: "OK",
            data: [
                { id: 1, title: "Todo 1", isCompleted: true },
                { id: 2, title: "Todo 2", isCompleted: false }
            ]
        });

        const underTest = makeApiService(httpClient);

        const result = await underTest.getTodos();

        expect(result.ok).toBe(true);
        expect(result.data?.length).toBe(2);
    });

    test('Should return an error when request fails', async () => {
        vi.spyOn(httpClient, 'get').mockResolvedValue({
            status: 500,
            statusText: "Fake error",
        });

        const underTest = makeApiService(httpClient);
        const result = await underTest.getTodos();

        expect(result.ok).toBe(false);
        expect(result.cause).toBe("Server error: Fake error");
    });

    test('Should return ok when a todo is added', async () => {
        vi.spyOn(httpClient, 'post').mockResolvedValue({
            status: 201,
            statusText: "Created",
        });
        const underTest = makeApiService(httpClient);
        const result = await underTest.addTodo({ key: "abc", title: 'New todo', isCompleted: false });
        expect(result.ok).toBe(true);
    });

    test('Should return an error when server fails to add a todo', async () => {
        vi.spyOn(httpClient, 'post').mockResolvedValue({
            status: 500,
            statusText: "Fake error",
        });
        const underTest = makeApiService(httpClient);
        const result = await underTest.addTodo({ key: "abc", title: 'New todo', isCompleted: false });
        expect(result.ok).toBe(false);
        expect(result.cause).toEqual("Server error: Fake error")
    });

    test('Should return ok when a todo is edited', async () => {
        vi.spyOn(httpClient, 'put').mockResolvedValue({
            status: 200,
            statusText: "Ok",
        });
        const underTest = makeApiService(httpClient);
        const result = await underTest.editTodo({ key: "def", title: 'New todo title', isCompleted: true });
        expect(result.ok).toBe(true);
    });

    test('Should return an error when server fails to edit a todo', async () => {
        vi.spyOn(httpClient, 'put').mockResolvedValue({
            status: 500,
            statusText: "Fake error",
        });
        const underTest = makeApiService(httpClient);
        const result = await underTest.editTodo({ key: "def", title: 'New todo title', isCompleted: true });
        expect(result.ok).toBe(false);
        expect(result.cause).toEqual("Server error: Fake error")
    });

    test('Should return ok when a todo is deleted', async () => {
        vi.spyOn(httpClient, 'delete').mockResolvedValue({
            status: 200,
            statusText: "No content",
        });
        const underTest = makeApiService(httpClient);
        const result = await underTest.deleteTodo({ key: "def", title: 'todo title', isCompleted: true });
        expect(result.ok).toBe(true);
    });

    test('Should return an error when server fails to delete a todo', async () => {
        vi.spyOn(httpClient, 'delete').mockResolvedValue({
            status: 500,
            statusText: "Fake error",
        });
        const underTest = makeApiService(httpClient);
        const result = await underTest.deleteTodo({ key: "def", title: 'todo title', isCompleted: true });
        expect(result.ok).toBe(false);
        expect(result.cause).toEqual("Server error: Fake error")
    });
});
