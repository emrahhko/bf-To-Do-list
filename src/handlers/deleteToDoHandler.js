import { deleteToDo } from '../../apis/deleteToDo.js';

export const deleteToDoHandler = async (id) => {
    document.getElementById(id).remove();
    await deleteToDo(id);
};