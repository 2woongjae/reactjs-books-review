import { startLoading, endLoading } from './index';
import { push } from 'connected-react-router';
import ApiService from '../services/ApiService';

export const ADD_BOOKS = 'ADD_BOOKS';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UNDO_DELETE_BOOK = 'UNDO_DELETE_BOOK';

const apiService = new ApiService();

function addBooks(books) {
  return {
    type: ADD_BOOKS,
    books,
  };
}

export function addBooksThunk(token) {
  return async dispatch => {
    dispatch(startLoading());
    try {
      const books = await apiService.addBooks(token);
      dispatch(addBooks(books));
    } catch (error) {
      console.log(error);
    }
    dispatch(endLoading());
  };
}

function deleteBook(bookId) {
  return {
    type: DELETE_BOOK,
    bookId,
  };
}

function undoDeleteBook(bookId) {
  return {
    type: UNDO_DELETE_BOOK,
    bookId,
  };
}

export function deleteBookThunk(bookId, token) {
  return async dispatch => {
    console.log(bookId, token);
    dispatch(startLoading());
    dispatch(deleteBook(bookId));
    try {
      await apiService.deleteBook(bookId, token);
    } catch (error) {
      console.log(error);
      dispatch(undoDeleteBook(bookId));
    }
    dispatch(endLoading());
  };
}

export function createBookThunk(bookReqParam, token) {
  return async dispatch => {
    dispatch(startLoading());
    try {
      const book = await apiService.createBook(bookReqParam, token);
      console.log('success', book);
      // await fail();
    } catch (error) {
      console.log(error);
    }
    dispatch(endLoading());
    dispatch(push('/'));
  };
}

function fail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('에러!!'));
    }, 2000);
  });
}
