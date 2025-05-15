import { useDispatchNotification } from "../state/NotificationProvider";
import { NotificationType } from "../state/notificationReducer";

interface NotificationProps {
    message: string
    visible: boolean
    type?: NotificationType
}

export const Notification = ({ message, visible, type = "default" }: NotificationProps) => {

    const dispatchNotification = useDispatchNotification();
    const handleClose = () => dispatchNotification({ type: 'HIDE' });

    let color = "";
    let backgroundColor = "";

    switch (type) {
        case "success":
            color = "#15803d";
            backgroundColor = "#bbf7d0";
            break;
        case "error":
            color = "#b91c1c";
            backgroundColor = "#fef2f2";
            break;
    }

    return (
        visible
            ?
            <div className="fixed bottom-8 w-full">
                <div className="container mx-auto py-1 px-4">
                    <div className="bg-white rounded-lg shadow-lg flex items-center justify-between" style={{ backgroundColor }}>
                        <span className="px-6" style={{ color }}>{message}</span>
                        <button aria-label="Close" className="py-4 px-4 cursor-pointer" onClick={handleClose} style={{ color }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            :
            null
    )
}
