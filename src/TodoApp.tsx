import { useState } from "react";
import { Todo, TodoList } from "./components/TodoList";
import { AddTodoInput } from "./components/AddInput";


export const TodoApp = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const onTodoAdd = (title: string) => {
        setTodos([...todos,
        {
            id: Math.random(),
            title,
        }]);
    };

    return (
        <>
            <div className="flex flex-col bg-gray-100 h-screen">
                <nav className="flex justify-between p-4 text-white bg-slate-800">
                    <h1 className="text-3xl">
                        Todo App
                    </h1>
                </nav>
                <main className="flex flex-col my-4 text-gray-700">
                    <div className="container mx-auto p-4">
                        <AddTodoInput onSubmit={onTodoAdd} />
                    </div>
                    <div className="container mx-auto p-4">
                        <TodoList todos={todos} />
                    </div>
                </main>
            </div>
        </>
    )
}
