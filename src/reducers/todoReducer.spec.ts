import { describe, expect, test } from "vitest";
import { todoReducer } from "./todoReducer";


describe('todo reducer', () => {

    test('should load todos', () => {
        const result = todoReducer([{
            id: 1,
            title: "test1",
            isCompleted: true,
        }], {
            type: 'LOAD_TODOS',
            items: [{
                id: 2,
                title: "test2",
                isCompleted: true,
            },]
        });
        expect(result).toEqual([{
            id: 2,
            title: "test2",
            isCompleted: true,
        },]);
    })


    test('should add todo', () => {
        const result = todoReducer([{
            id: 1,
            title: "test",
            isCompleted: true,
        },], {
            type: 'ADD_TODO',
            item: {
                id: 2,
                title: "test2",
                isCompleted: false,
            }
        });

        expect(result).toEqual([{
            id: 1,
            title: "test",
            isCompleted: true,
        }, {
            id: 2,
            title: "test2",
            isCompleted: false,
        }]);
    })

    test('should delete todo', () => {
        const result = todoReducer([{
            id: 1,
            title: "test",
            isCompleted: true,
        }, {
            id: 2,
            title: "test2",
            isCompleted: false,

        }], {
            type: 'REMOVE_TODO',
            id: 2,
        });

        expect(result).toEqual([{
            id: 1,
            title: "test",
            isCompleted: true,
        }]);
    })

    test('should edit todo', () => {
        const result = todoReducer([{
            id: 1,
            title: "test",
            isCompleted: true,
        }, {
            id: 2,
            title: "test2",
            isCompleted: false,
        }], {
            type: 'EDIT_TODO',
            item: {
                id: 2,
                title: "test3",
                isCompleted: true,
            },
        });

        expect(result).toEqual([{
            id: 1,
            title: "test",
            isCompleted: true,
        }, {
            id: 2,
            title: "test3",
            isCompleted: true,
        }]);
    })
});
