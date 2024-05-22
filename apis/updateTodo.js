export const updateTodo = async (id, newData) => {
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });

        if (!res.ok) {
            throw new Error(`Error updating todo with status : ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};