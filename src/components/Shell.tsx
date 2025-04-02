import { PropsWithChildren } from "react";

export const Shell: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold underline py-4">
                Dummy todo app
            </h1>
            {children}
        </div>
    );
};