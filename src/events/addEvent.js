import { dom } from '../dom.js';
import { addHandler } from '../handlers/addHandler.js';

export const addEvent = () => {
    dom.button.addEventListener('click', addHandler);
};