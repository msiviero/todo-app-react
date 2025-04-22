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
        setIsEditMode(true && !readOnly);
    }

    const handleTextEdit = () => {
        setIsEditMode(false);
        if (onChange) {
            onChange(editedText);
        }
    }

    return (
        <form className="w-full flex-1 cursor-pointer" action={handleTextEdit}>
            {
                isEditMode
                    ? <input autoFocus={true} className="py-1 block w-full text-lg focus:outline-none" type="text" value={editedText} onBlur={handleTextEdit} onChange={e => setEditedText(e.target.value)} />
                    : <label className="block w-full text-lg" onClick={handleLabelClick}>
                        {editedText}
                    </label>
            }
        </form>
    );
};
