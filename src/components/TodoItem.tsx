export const TodoItem: React.FC = () => (
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
)