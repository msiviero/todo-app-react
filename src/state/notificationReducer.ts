import { Reducer } from "react";


export type NotificationType = "default" | "success" | "error"

export interface NotificationState {
    visible: boolean
    message: string
    type: NotificationType
}

export type NotificationAction = NotificationShowAction | NotificationHideAction

interface NotificationShowAction {
    type: 'SHOW'
    message: string
    notificationType?: NotificationType
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
                type: action.notificationType || "default",
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
