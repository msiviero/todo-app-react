import { useState } from "react";


interface AddTodoInputProps {
    onSubmit: (value: string) => void;
}

export const AddTodoInput = ({ onSubmit }: AddTodoInputProps) => {

    const [title, setTitle] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (value: string) => {
        setTitle(value);
        setIsDisabled(!value);
    }

    const handleSubmit = (_: FormData) => {
        onSubmit(title);
        handleChange("");
    }

    return (
        <div className="bg-white rounded-xl shadow-xl">
            <form className="w-full flex" action={handleSubmit}>
                <input
                    aria-label="Todo title"
                    className="flex-1 px-6 text-lg rounded-l-lg focus:outline-none"
                    type="text"
                    placeholder="Add a todo..."
                    value={title}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button disabled={isDisabled}
                    type="submit"
                    value="Add a todo"
                    className="cursor-pointer py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-r-lg transition-all focus:border-blue-400 disabled:bg-gray-400 disabled:cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </form>
        </div>
    )
}
