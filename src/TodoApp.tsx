import { useState } from "react";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
import { PlusIcon } from "./components/Icon";
import { TodoForm } from "./components/Form";

export const TodoApp = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-between p-4 bg-slate-900 text-white">
                <h1 className="text-3xl">
                    Todo App
                </h1>
            </nav>

            <main className="flex flex-col my-4">
                <div className="container mx-auto p-4">
                    <Button
                        label="Add Todo"
                        icon={<PlusIcon/>}
                        onClick={() => setModalIsOpen(true)}
                    />
                </div>
            </main>

            <Modal
                title="Add Todo"
                open={modalIsOpen} 
                onClose={() => setModalIsOpen(false)}
                >
                <TodoForm />
            </Modal>
        </>
    )
}
