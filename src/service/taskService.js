import api from "./api";

export const getTasks = async () => {
    const response = await api.get('/tasks', {
       // withCredentials: true, // Si tu utilises des cookies
    });
    return response.data;
};
export const createTask = async (taskData) => {
    try {
        const response = await api.post('/tasks', taskData, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};