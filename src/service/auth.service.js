import api from './api.service';

export const AuthService = {
  login: async ({ email, password }) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async ({ username, email, password, role }) => {
    const response = await api.post('/auth/register', {
      username,
      email,
      password,
      role
    });
    return response.data;
  }
};
