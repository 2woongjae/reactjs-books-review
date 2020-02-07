import axios from "axios";

export default class BookService {
  static getBooks = token =>
    axios.get("https://api.marktube.tv/v1/book", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  static getBook = token =>
    axios.get("https://api.marktube.tv/v1/book", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  static deleteBook = (token, id) =>
    axios.delete("https://api.marktube.tv/v1/book", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  static editBook = (token, id) =>
    axios.patch("https://api.marktube.tv/v1/book", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  static addBook = (token, book) =>
    axios.post("https://api.marktube.tv/v1/book", book, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
}
