import {
  START_RECEIVE_BOOKS,
  RECEIVE_BOOKS,
  ERROR_RECEIVE_BOOKS,
} from '../constants/actionTypes';
import { BookRequest } from '../services/RequestServices';

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

export function errorReceiveBooks() {
  return {
    type: ERROR_RECEIVE_BOOKS,
  };
}

export function receiveBooksThunk(token) {
  return async dispatch => {
    dispatch(startReceiveBooks());
    try {
      const response = await BookRequest.getBooks(token);
      dispatch(receiveBooks(response.data));
    } catch (error) {
      console.log(error);
      dispatch(errorReceiveBooks());
    }
  };
}
