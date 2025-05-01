import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // link temporario da sua API
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para adicionar token automaticamente (se quiser depois)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
