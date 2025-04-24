import { useReducer } from "react";
import { todoReducer } from "../state/todoReducer";
import { Checkbox } from "./Checkbox";
import { AddTodoInput } from "./AddInput";
import { EditableLabel } from "./EditableLabel";
import { Todo } from "../model/todo";
import { ApiService } from "../service/apiService";
import { isAxiosError } from "axios";
import { useDispatchNotification } from "../state/NotificationProvider";
import { KeyGenerator } from "../service/keyService";


export interface TodoListProps {
    api: ApiService;
    keyGenerator: KeyGenerator;
}

export const TodoList = ({ api, keyGenerator }: TodoListProps) => {
    const [todos, dispatchTodoAction] = useReducer(todoReducer, []);
    const dispatchNotification = useDispatchNotification();

    const onTodoAdd = async (title: string) => {
        const todo = {
            key: keyGenerator.generateKey(),
            title,
            isCompleted: false,
        };

        try {
            const result = await api.addTodo(todo);
            if (!result.ok) {
                return dispatchNotification({
                    type: 'SHOW',
                    message: `Error adding todo: ${result.cause}`,
                    notificationType: 'error',
                });
            }
            dispatchNotification({
                type: 'SHOW',
                message: `Todo added successfully`,
                notificationType: 'success',
            })
            dispatchTodoAction({ type: 'ADD_TODO', item: todo });
        } catch (e) {
            handleError(e);
        }
    }

    const onTodoDelete = (key: string) => {
        dispatchTodoAction({ type: 'REMOVE_TODO', key })
    }

    const onTodoEdit = (todo: Todo) => {
        dispatchTodoAction({
            type: 'EDIT_TODO',
            item: todo
        })
    }

    const handleError = (e: unknown) => {
        if (isAxiosError(e)) {
            dispatchNotification({
                type: 'SHOW',
                message: `http error ${e.status}: ${e.cause?.message}`,
                notificationType: 'error',
            });
        }
        // generic error
        dispatchNotification({
            type: 'SHOW',
            message: `Error adding todo: ${e}`,
            notificationType: 'error',
        });
    }

    return (
        <>
            <div className="container mx-auto p-4">
                <AddTodoInput onSubmit={onTodoAdd} />
            </div>
            <div className="container mx-auto p-4">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    {todos.map((todo, index) => (
                        <div className="flex flex-row gap-4 space-between items-center justify-center border-gray-100 border-b hover:bg-gray-50"
                            key={index}
                        >
                            <Checkbox key={todo.key} checked={todo.isCompleted} onChange={checked => onTodoEdit({ ...todo, isCompleted: checked })} />
                            <div className="flex-1">
                                <EditableLabel onChange={value => onTodoEdit({ ...todo, title: value })} value={todo.title} readOnly={todo.isCompleted} />
                            </div>
                            <button onClick={() => onTodoDelete(todo.key)} className="text-red-500 hover:bg-red-50 p-4 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
