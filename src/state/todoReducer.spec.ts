import { describe, expect, test } from "vitest";
import { todoReducer } from "./todoReducer";


describe('todo reducer', () => {

    test('should load todos', () => {
        const result = todoReducer([{
            key: 'abc',
            title: "test1",
            isCompleted: true,
        }], {
            type: 'LOAD_TODOS',
            items: [{
                key: "def",
                title: "test2",
                isCompleted: true,
            },]
        });
        expect(result).toEqual([{
            key: "def",
            title: "test2",
            isCompleted: true,
        },]);
    })


    test('should add todo', () => {
        const result = todoReducer([{
            key: 'abc',
            title: "test",
            isCompleted: true,
        },], {
            type: 'ADD_TODO',
            item: {
                key: "def",
                title: "test2",
                isCompleted: false,
            }
        });

        expect(result).toEqual([{
            key: 'abc',
            title: "test",
            isCompleted: true,
        }, {
            key: "def",
            title: "test2",
            isCompleted: false,
        }]);
    })

    test('should delete todo', () => {
        const result = todoReducer([{
            key: 'abc',
            title: "test",
            isCompleted: true,
        }, {
            key: "def",
            title: "test2",
            isCompleted: false,

        }], {
            type: 'REMOVE_TODO',
            item: {
                key: "def",
                title: "test2",
                isCompleted: false,
    
            },
        });

        expect(result).toEqual([{
            key: 'abc',
            title: "test",
            isCompleted: true,
        }]);
    })

    test('should edit todo', () => {
        const result = todoReducer([{
            key: 'abc',
            title: "test",
            isCompleted: true,
        }, {
            key: "def",
            title: "test2",
            isCompleted: false,
        }], {
            type: 'EDIT_TODO',
            item: {
                key: "def",
                title: "test3",
                isCompleted: true,
            },
        });

        expect(result).toEqual([{
            key: 'abc',
            title: "test",
            isCompleted: true,
        }, {
            key: "def",
            title: "test3",
            isCompleted: true,
        }]);
    })
});
