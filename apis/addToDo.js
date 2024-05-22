export const addToDo = async (todoData) => {
    try {
        const res = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(todoData),
        });
        if (!res.ok) {
            throw new Error('Failed to add todo');
        }

        return await res.json();
    } catch (err) {
        console.error(err);
    }
};