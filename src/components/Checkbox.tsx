import { useState } from "react";

interface CheckboxProps {
    label?: string;
    checked?: boolean;
}

export const Checkbox = ({ label, checked }: CheckboxProps) => {

    const [isChecked, setIsChecked] = useState(!!checked);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked);

    return (
        <div className="flex items-center">
            <input id={`checkbox_${label}`} onChange={handleCheckboxChange} name={label} checked={isChecked} type="checkbox" className="mx-4 appearance-none peer w-8 h-8 border-2 border-gray-300 rounded-sm bg-white" />
            {
                label ? <label className={`text-xl cursor-pointer ${isChecked ? 'line-through' : ''}`} htmlFor={`checkbox_${label}`}>{label}</label> : null
            }
            <svg className="stroke-gray-700 size-8 ml-4 absolute hidden peer-checked:block pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
        </div>
    )
}
