import { useState } from "react";

export interface EditableLabelProps {
    value: string;
    readOnly: boolean;
    onChange?: (value: string) => void;
}

export const EditableLabel = ({ value, readOnly, onChange }: EditableLabelProps) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const [editedText, setEditedText] = useState(value);

    const handleLabelClick = () => {
        setIsEditMode(true);
    }

    const handleTextEdit = () => {
        setIsEditMode(false);
        if (onChange) {
            onChange(editedText);
        }
    }

    return (
        isEditMode
            ?
            <form action={handleTextEdit}>
                <input name="title" aria-label="title" autoFocus={true} className="py-1 block w-full text-lg focus:outline-none" type="text" value={editedText} onBlur={handleTextEdit} onChange={e => setEditedText(e.target.value)} />
            </form>
            :
            <button className="text-left cursor-pointer w-full block text-lg disabled:line-through" aria-label="Edit todo title" disabled={readOnly} onClick={handleLabelClick}>
                {editedText}
            </button>
    )
};
