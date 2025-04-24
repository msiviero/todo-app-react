import { describe, expect, test } from "vitest";
import { notificationReducer } from "./notificationReducer";


describe('notification reducer', () => {

    test('should show notification', () => {
        const result = notificationReducer({
            visible: false,
            message: '',
            type: "default"
        }, {
            type: 'SHOW',
            message: 'hello',
            notificationType: "success",
        });

        expect(result).toEqual({
            visible: true,
            type: 'success',
            message: 'hello'
        });
    })

    test('should hide notification', () => {
        const result = notificationReducer({
            visible: true,
            message: 'hello',
            type: "default",
        }, {
            type: 'HIDE',
        });

        expect(result).toEqual({
            visible: false,
            type: "default",
            message: ''
        });
    })
});
