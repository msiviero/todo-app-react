import { PropsWithChildren } from "react";

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {
    return (
        <>
            <button
                className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
};