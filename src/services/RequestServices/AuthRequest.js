import * as axios from 'axios';

export const AuthRequest = {
  async login(email, password) {
    return await axios.post('https://api.marktube.tv/v1/me', {
      email,
      password,
    });
  },
  async logout(token) {
    return await axios.delete('https://api.marktube.tv/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
