import { Reducer } from "react";

interface NotificationState {
    visible: boolean
    message: string
}

interface NotificationShowAction {
    type: 'SHOW'
    message: string
}

interface NotificationHideAction {
    type: 'HIDE'
}

type NotificationAction = NotificationShowAction | NotificationHideAction

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
