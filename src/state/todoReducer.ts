import { Reducer } from "react";
import { Todo } from "../model/todo";

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
    item: Todo;
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
            return todos.filter((it) => it.key !== action.item.key)
        case 'EDIT_TODO':
            return todos.map((it) => it.key === action.item.key ? action.item : it)
        default:
            throw new Error(`Unknown action: ${action}`)
    }
}
