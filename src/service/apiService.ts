import axios from "axios"
import { AppConfig } from "./config"
import { Todo } from "../model/todo"

export interface ApiService {
    getTodos(): Promise<Todo[]>
    addTodo(todo: Todo): Promise<void>
    editTodo(todo: Todo): Promise<void>
    deleteTodo(todo: Todo): Promise<void>
}

export const createApiService = (config: AppConfig): ApiService => {

    const httpClient = axios.create({
        baseURL: `${config.apiUrl}/api`,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return {
        async getTodos() {
            const response = await httpClient.get<Todo[]>('/todo')
            return response.data
        },
        async addTodo(todo) {
            const response = await httpClient.post<void>('/todo', todo)
            return response.data
        },
        async editTodo(todo: Todo) {
            const response = await httpClient.put(`/todo/${todo.id}`, todo)
            return response.data
        },
        async deleteTodo(todo: Todo) {
            const response = await httpClient.delete<void>(`/todo/${todo}`)
            return response.data
        }
    }
}
