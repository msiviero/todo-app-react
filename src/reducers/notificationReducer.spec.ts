import { describe, expect, test } from "vitest";
import { notificationReducer } from "./notificationReducer";


describe('notification reducer', () => {

    test('should show notification', () => {
        const result = notificationReducer({
            visible: false,
            message: ''
        }, {
            type: 'SHOW',
            message: 'hello'
        });

        expect(result).toEqual({
            visible: true,
            message: 'hello'
        });
    })

    test('should hide notification', () => {
        const result = notificationReducer({
            visible: true,
            message: 'hello'
        }, {
            type: 'HIDE',
        });

        expect(result).toEqual({
            visible: false,
            message: ''
        });
    })
});
