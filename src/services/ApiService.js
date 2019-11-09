import axios from 'axios';

const API_URL = 'https://api.marktube.tv/v1/book';

export default class ApiService {
  async addBooks(token) {
    const res = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }

  async deleteBook(bookId, token) {
    await axios.delete(`${API_URL}/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createBook(bookReqParam, token) {
    const res = await axios.post(API_URL, bookReqParam, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
}
