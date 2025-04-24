import axios, { AxiosInstance } from "axios"
import { envConfig } from "./config"
import { Todo } from "../model/todo"

export interface ApiResult<T> {
    ok: boolean
    cause?: string
    data?: T
}

export interface ApiService {
    getTodos(): Promise<ApiResult<Todo[]>>
    addTodo(todo: Todo): Promise<ApiResult<void>>
    editTodo(todo: Todo): Promise<ApiResult<void>>
    deleteTodo(todo: Todo): Promise<ApiResult<void>>
}

export const httpClient = axios.create({
    baseURL: `${envConfig.apiUrl}/api`,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const makeApiService = (httpClient: AxiosInstance): ApiService => {
    return {
        async getTodos() {
            const response = await httpClient.get<Todo[]>('/todo')
            return response.status === 200
                ? { ok: true, data: response.data }
                : { ok: false, cause: `Server error: ${response.statusText}` }
        },
        async addTodo(todo) {
            const response = await httpClient.post<void>('/todo', todo)
            return response.status === 201
                ? { ok: true }
                : { ok: false, cause: `Server error: ${response.statusText}` }
        },
        async editTodo(todo: Todo) {
            const response = await httpClient.put(`/todo/${todo.key}`, todo)
            return response.status === 200
                ? { ok: true }
                : { ok: false, cause: `Server error: ${response.statusText}` }
        },
        async deleteTodo(todo: Todo) {
            const response = await httpClient.delete<void>(`/todo/${todo.key}`)
            return response.status === 200
                ? { ok: true }
                : { ok: false, cause: `Server error: ${response.statusText}` }
        }
    }
}
