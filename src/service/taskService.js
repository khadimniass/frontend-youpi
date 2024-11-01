import api from "./api";

export const getTasks = async () => {
    const response = await api.get('/tasks', {
       // withCredentials: true, // Si tu utilises des cookies
    });
    return response.data;
};
