import { Reducer } from "react";

export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface TodoLoadAction {
    type: 'LOAD_TODOS';
    items: Todo[];
}

export interface TodoAddAction {
    type: 'ADD_TODO';
    item: Todo;
}

export interface TodoRemoveAction {
    type: 'REMOVE_TODO';
    id: number;
}

export interface TodoEditAction {
    type: 'EDIT_TODO';
    item: Todo;
}

export type TodoAction = TodoAddAction | TodoRemoveAction | TodoEditAction | TodoLoadAction;

export const todoReducer: Reducer<Todo[], TodoAction> = (todos, action) => {
    switch (action.type) {
        case 'LOAD_TODOS':
            return action.items;
        case 'ADD_TODO':
            return [...todos, action.item]
        case 'REMOVE_TODO':
            return todos.filter((it) => it.id !== action.id);
        case 'EDIT_TODO':
            return todos.map((it) => it.id === action.item.id ? action.item : it)
        default:
            throw new Error(`Unknown action: ${action}`)
    }
}
