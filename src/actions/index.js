import * as axios from 'axios';

export const START_RECEIVE_BOOKS = 'START_RECEIVE_BOOKS';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const ERROR_RECEIVE_BOOKS = 'ERROR_RECEIVE_BOOKS';

export const DELETE_BOOK = 'DELETE_BOOK';
export const UNDO_DELETE_BOOK = 'UNDO_DELETE_BOOK';

export const BOOKS = 'BOOKS';

export const BOOKS_FETCH_REQUESTED = 'BOOKS_FETCH_REQUESTED';
export const BOOKS_FETCH_SUCCEEDED = 'BOOKS_FETCH_SUCCEEDED';
export const BOOKS_FETCH_FAILED = 'BOOKS_FETCH_FAILED';

export function startReceiveBooks() {
  return {
    type: START_RECEIVE_BOOKS,
  };
}

export function receiveBooks(books) {
  return {
    type: RECEIVE_BOOKS,
    books,
  };
}

export function receiveBooksThunk(token) {
  return async dispatch => {
    dispatch(startReceiveBooks());
    try {
      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTimeout(() => {
        dispatch(receiveBooks(response.data));
      }, 1000);
    } catch (error) {
      console.log(error);
      dispatch(errorReceiveBooks());
    }
  };
}

export function receiveBooksPromise(token) {
  return {
    type: BOOKS,
    payload: axios.get('https://api.marktube.tv/v1/book', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  };
}

export function receiveBooksSaga(token) {
  return {
    type: BOOKS_FETCH_REQUESTED,
    payload: { token },
  };
}

export function errorReceiveBooks() {
  return {
    type: ERROR_RECEIVE_BOOKS,
  };
}

export function deleteBook(bookId) {
  return {
    type: DELETE_BOOK,
    bookId,
  };
}

export function undoDeleteBook(bookId) {
  return {
    type: UNDO_DELETE_BOOK,
    bookId,
  };
}
