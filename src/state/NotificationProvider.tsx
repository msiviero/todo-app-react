import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from "react";
import { NotificationAction, notificationReducer, NotificationState } from "./notificationReducer";


export const NotificationContext = createContext<NotificationState>({ visible: false, message: '', type: 'default' });
export const NotificationDispatchContext = createContext<Dispatch<NotificationAction>>(() => { console.error('No action provided') });

export interface NotificationProviderProps {
    initialState: NotificationState;
}

export function NotificationProvider({ initialState, children }: PropsWithChildren<NotificationProviderProps>) {
    const [state, dispatch] = useReducer(notificationReducer, initialState);

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
