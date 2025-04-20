import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const apiService = {
    get: async (url) => {
        try {
            const response = await api.get(url);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    post: async (url, data) => {
        try {
            const response = await api.post(url, data);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    put: async (url, data) => {
        try {
            const response = await api.put(url, data);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    delete: async (url) => {
        try {
            const response = await api.delete(url);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    }
};

export default api;