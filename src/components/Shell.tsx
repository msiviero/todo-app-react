import { PropsWithChildren } from "react";

// TODO https://medium.com/@dimterion/modals-with-html-dialog-element-in-javascript-and-react-fb23c885d62e
// TODO https://react.dev/learn/extracting-state-logic-into-a-reducer
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