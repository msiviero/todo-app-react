import { useEffect, useRef } from "react";

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
            className="mt-8 mx-auto backdrop:bg-black/50"
            ref={ref} onCancel={onClose}
        >
            <h1>{title}</h1>
            {children}
            <button onClick={onClose}>
                Close
            </button>
        </dialog>
    );
}
