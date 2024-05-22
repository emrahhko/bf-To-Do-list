/**
 * @jest-environment jsdom
 */

import { createTodo } from './createTodo.js';

describe('create an element', () => {
    const todoData = {
        id: '1',
        title: 'Buy milk',
        completed: false
    };
    const item = createTodo(todoData);

    test('nodeName -> DIV', () => {
        expect(item.nodeName).toEqual('DIV');
    });

    test('childElementCount -> 3', () => {
        expect(item.childElementCount).toEqual(3);
    });

    test('title should have correct text', () => {
        const title = item.querySelector('.title');
        expect(title.innerText).toEqual('Buy milk');
    });
});
