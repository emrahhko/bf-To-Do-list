import { changeInputHandler } from '../handlers/changeInputHandler.js';
import { deleteToDoHandler } from '../handlers/deleteToDoHandler.js';

export const createTodo = (todoData) => {
    const container = document.createElement('div');
    container.className = 'todo-container';
    container.id = todoData.id;

    const title = document.createElement('h2');
    title.className = 'title';
    title.innerText = todoData.title;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoData.completed;

    checkbox.addEventListener('change', () => {
        changeInputHandler(todoData);
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerText = 'Delete';
    deleteButton.id = todoData.id;
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    deleteButton.addEventListener('click', () => {
        deleteToDoHandler(todoData.id);
    });

    container.append(title, checkbox, deleteButton);
    return container;
};