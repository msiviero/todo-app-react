import { useEffect, useRef } from "react";
import { CloseIcon } from "./Icon";

type ModalProps = {
    title: string;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export const Modal = ({ title, open, onClose, children }: ModalProps) => {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (open) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [open]);

    return (
        <dialog
            className="w-full mt-8 mx-auto rounded backdrop:bg-black/50"
            ref={ref} onCancel={onClose}
        >
            <div className="flex justify-between items-center px-4 py-2">
                <h1 className="text-2xl font-bold">
                    {title}
                </h1>
                <button onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
            {children}
        </dialog>
    );
}
