
type ButtonProps = {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void
}

export const Button = ({ onClick, label, icon }: ButtonProps) => {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition-all"
            onClick={onClick}
        >
            <div className="flex justify-center items-center">
                {!!icon ?
                    <div className="mr-2">
                       {icon}
                    </div>
                    : null}
                {label}
            </div>
        </button>
    );
}