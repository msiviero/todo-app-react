import { Reducer } from "react";

export interface NotificationState {
    visible: boolean
    message: string
}

export type NotificationAction = NotificationShowAction | NotificationHideAction

interface NotificationShowAction {
    type: 'SHOW'
    message: string
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
                message: action.message
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
