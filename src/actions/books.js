import { startLoading, endLoading } from './index';

export const ADD_BOOKS = 'ADD_BOOKS';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UNDO_DELETE_BOOK = 'UNDO_DELETE_BOOK';

export const DELETE = 'DELETE';
export const DELETE_PENDING = 'DELETE_PENDING';
export const DELETE_FULFILLED = 'DELETE_FULFILLED';
export const DELETE_REJECTED = 'DELETE_REJECTED';

export const BOOKS_FETCH_REQUESTED = 'BOOKS_FETCH_REQUESTED';
export const BOOKS_FETCH_SUCCEEDED = 'BOOKS_FETCH_SUCCEEDED';
export const BOOKS_FETCH_FAILED = 'BOOKS_FETCH_FAILED';

export function fetchRequest(token) {
  return {
    type: BOOKS_FETCH_REQUESTED,
    payload: { token },
  };
}

export function addBooks(books) {
  return {
    type: ADD_BOOKS,
    books,
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

export function deleteBookThunk(bookId) {
  return async dispatch => {
    dispatch(startLoading());
    dispatch(deleteBook(bookId));
    try {
      //
      // await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      await fail();
    } catch (error) {
      console.log(error);
      dispatch(undoDeleteBook(bookId));
    }
    dispatch(endLoading());
  };
}

export function deleteBookPromise(bookId) {
  return {
    type: DELETE,
    payload: fail(),
  };
}

function fail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('에러!!'));
    }, 2000);
  });
}
