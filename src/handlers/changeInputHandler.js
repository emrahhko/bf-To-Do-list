import { updateTodo } from '../../apis/updateTodo.js';

export const changeInputHandler = async (todoData) => {
    const newData = { ...todoData, completed: !todoData.completed};
    await updateTodo(todoData.id, newData);
};