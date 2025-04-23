import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from "react";
import { NotificationAction, notificationReducer, NotificationState } from "./notificationReducer";


const defaultNotificationState = { visible: false, message: '' };

const NotificationContext = createContext<NotificationState>(defaultNotificationState);
const NotificationDispatchContext = createContext<Dispatch<NotificationAction>>(() => { });

export function NotificationProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(notificationReducer, defaultNotificationState);

    return (
        <NotificationContext.Provider value={state}>
            <NotificationDispatchContext.Provider value={dispatch}>
                {children}
            </NotificationDispatchContext.Provider>
        </NotificationContext.Provider>
    );
}

export const useNotificationState = () => useContext(NotificationContext);
export const useDispatchNotification = () => useContext(NotificationDispatchContext);
