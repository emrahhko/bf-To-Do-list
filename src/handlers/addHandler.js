import { dom } from "../dom.js";
import { addToDo } from "../../apis/addToDo.js";

export const addHandler = async () => {
    const value = dom.input.value;
    if (!value) {
        return;
    }

    const todoData = {
        title: value,
        completed: false,
    };
    await addToDo(todoData);
};