
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
                <div className="uk-padding">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h2 className="uk-card-title uk-heading-small">
                            Buy the milk
                        </h2>
                        <p uk-margin="true">
                            <button className="uk-button uk-button-primary uk-margin-small-right" >
                                <span uk-icon="check" className="uk-margin-small-right" />
                                Toggle done
                            </button>
                            {/* <button className="uk-button uk-button-default uk-margin-small-right">
                                <span uk-icon="file-edit" className="uk-margin-small-right" />
                                Edit
                            </button> */}
                            <button className="uk-button uk-button-danger uk-margin-small-right">
                                <span uk-icon="minus-circle" className="uk-margin-small-right" />
                                Delete
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <div id="modal-add-todo" uk-modal="true">
            <div className="uk-modal-dialog uk-modal-body">
                <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                <h2 className="uk-modal-title">Add a todo</h2>
                <div>
                    <form>
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin">
                                <input className="uk-input" type="text" placeholder="Input" aria-label="Input" />
                            </div>
                            <div className="uk-margin">
                                <p className="uk-text-right">
                                    <button className="uk-button uk-button-primary" type="button">
                                        <span uk-icon="check" className="uk-margin-small-right" />
                                        Save
                                    </button>
                                </p>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </>
)
