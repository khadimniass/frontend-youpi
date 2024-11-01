import api from "./api";
import {data} from "autoprefixer";

export const register = async (userData) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const login = async (credentials) => {
    try {
        const response = await api.post('/login', credentials,{ withCredentials: true });
        console.log(response.data.user)
        localStorage.setItem('user', response.data.user);
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};
