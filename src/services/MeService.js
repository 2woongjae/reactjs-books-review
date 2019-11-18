import axios from 'axios';

const API_URL = 'https://api.marktube.tv/v1/me';

export default class MeService {
  async logout(token) {
    await axios.delete(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
