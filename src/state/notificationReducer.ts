import { Reducer } from "react";
import { NotificationType } from "../components/Notification";


export interface NotificationState {
    visible: boolean
    message: string
    type: NotificationType
}

export type NotificationAction = NotificationShowAction | NotificationHideAction

interface NotificationShowAction {
    type: 'SHOW'
    message: string
    notificationType: NotificationType
}

interface NotificationHideAction {
    type: 'HIDE'
}

export const notificationReducer: Reducer<NotificationState, NotificationAction> = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return {
                ...state,
                visible: true,
                message: action.message,
                type: action.notificationType,
            }
        case 'HIDE':
            return {
                ...state,
                visible: false,
                message: '',
            }
        default:
            throw new Error(`Unknown action: ${action}`)
    }
}
