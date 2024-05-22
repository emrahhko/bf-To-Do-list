export const deleteToDo = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
        });

        if (!res.ok) {
            throw new Error('Failed to delete To Do');
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};