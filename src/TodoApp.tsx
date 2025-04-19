import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

export const TodoApp: React.FC = () => (
    <>
        <nav className="uk-navbar-container">
            <div className="uk-container">
                <div uk-navbar="true" className="uk-flex-between">
                    <a className="uk-navbar-item uk-logo" href="/" aria-label="Back to Home">TodoApp</a>
                    <div className="uk-navbar-item">
                        <button className="uk-button uk-button-default uk-button-primary" uk-toggle="target:#modal-add-todo">
                            <span uk-icon="plus-circle" className="uk-margin-small-right" />
                            Add one
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <main>
            <div className="uk-container">
                <TodoItem/>
            </div>
        </main>

        <div id="modal-add-todo" uk-modal="true">
            <div className="uk-modal-dialog uk-modal-body">
                <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                <h2 className="uk-modal-title">Add a todo</h2>
                <div>
                    <TodoForm/>
                </div>
            </div>
        </div>
    </>
)
