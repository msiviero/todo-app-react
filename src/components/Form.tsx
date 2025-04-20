import { useEffect, useState } from "react";



type TodoFormProps = {
    onSubmit?: (title: string) => void;
    initialValue?: string;
};

export const TodoForm = ({ initialValue, onSubmit }: TodoFormProps) => {

    const [fieldError, setFieldError] = useState("");
    const [titleValue, setTitleValue] = useState("");

    useEffect(() => setTitleValue(initialValue || ""), [initialValue]);

    const handleSubmit = () => {
        if (validate(titleValue)) {
            onSubmit?.(titleValue);
            setTitleValue("");
            setFieldError("");
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTitleValue(value);
        setFieldError("");
        validate(value);
    }

    const validate = (value: string) => {
        if (!value) {
            setFieldError("This field is required");
            return false;
        }
        setFieldError("");
        return true;
    }

    const inputCls = !fieldError
        ? "border-gray-400 focus:outline-blue-400"
        : "border-red-700 focus:outline-red-700";

    return (
        <div className="pb-4">
            <form action={handleSubmit}>
                <div className="px-4 py-2">
                    <input
                        className={`px-2 py-2 w-full border rounded text-gray-700 ${inputCls}`}
                        name="title"
                        type="text"
                        placeholder="Insert todo title..."
                        aria-invalid={fieldError ? "true" : "false"}
                        aria-errormessage={fieldError}
                        onChange={onChange}
                        value={titleValue}
                    />
                    <div className="py-2 px-1 text-red-700">
                        {fieldError}
                    </div>
                </div>
                <div className="px-4 py-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition-all"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
