import { TodoList } from "./components/TodoList";


export const TodoApp = () => {
    return (
        <>
            <div className="flex flex-col bg-gray-100 h-screen">
                <nav className="flex justify-between p-4 text-white bg-slate-800">
                    <h1 className="text-3xl">
                        Todo App
                    </h1>
                </nav>
                <main className="flex flex-col my-4 text-gray-700">
                    <TodoList />
                </main>
            </div>
        </>
    )
}
