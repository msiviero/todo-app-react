import { FormEvent, useState } from "react";

export const TodoForm: React.FC = () => {

    const [todoTitle, setTodoTitle] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="uk-fieldset">
                <div className="uk-margin">
                    <input
                        name="todo-title"
                        aria-label="Input"
                        className="uk-input uk-form-danger"
                        type="text"
                        placeholder="What you need to do?"
                        value={todoTitle}
                        onChange={e => setTodoTitle(e.target.value)}
                    />
                    <span className="uk-text-small uk-text-danger">Error message</span>
                </div>
                <div className="uk-margin uk-text-right">
                    <input className="uk-button uk-button-primary" type="submit" value="Save" />
                </div>
            </fieldset>
        </form>
    )
}
