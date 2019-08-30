import * as axios from 'axios';
import {
  START_RECEIVE_BOOKS,
  RECEIVE_BOOKS,
  ERROR_RECEIVE_BOOKS,
} from '../constants/actionTypes';

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
