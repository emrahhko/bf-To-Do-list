import { dom } from '../dom.js';
import { getTodos } from '../../apis/getTodos.js';
import { createTodo } from '../components/createTodo.js';

export const loadHandler = async () => {
    const data = await getTodos();
    data.forEach((todo) => {
        const todoDom = createTodo(todo);
        dom.todos.append(todoDom);
    });
};