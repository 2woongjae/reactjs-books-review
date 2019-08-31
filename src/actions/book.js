import { BookRequest } from '../services/RequestServices';
import {
  START_RECEIVE_BOOK,
  RECEIVE_BOOK,
  ERROR_RECEIVE_BOOK,
  DELETE_BOOK,
  UNDO_DELETE_BOOK,
} from '../constants/actionTypes';

function startReceiveBook() {
  return {
    type: START_RECEIVE_BOOK,
  };
}

function receiveBook(book) {
  return {
    type: RECEIVE_BOOK,
    book,
  };
}

function errorReceiveBook() {
  return {
    type: ERROR_RECEIVE_BOOK,
  };
}

export function receiveBookThunk(token, bookId) {
  return async dispatch => {
    dispatch(startReceiveBook());
    try {
      const response = await BookRequest.getBook(token, bookId);
      dispatch(receiveBook(response.data));
    } catch (error) {
      console.log(error);
      dispatch(errorReceiveBook());
    }
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
