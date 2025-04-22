interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (value: boolean) => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
        <div className="flex items-center">
            <input id={`checkbox_${label}`} onChange={e => onChange?.call(null, e.target.checked)} name={label} checked={checked} type="checkbox" className="mx-4 appearance-none peer w-7 h-7 border-2 border-gray-300 rounded-sm bg-white" />
            {
                label ? <label className={`text-lg cursor-pointer ${checked ? 'line-through' : ''}`} htmlFor={`checkbox_${label}`}>{label}</label> : null
            }
            <svg className="stroke-gray-700 size-7 ml-4 absolute hidden peer-checked:block pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
        </div>
    )
}
