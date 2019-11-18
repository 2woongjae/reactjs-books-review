import { startLoading, endLoading } from './index';
import { push } from 'connected-react-router';
import BookService from '../services/BookService';
import MeService from '../services/MeService';
import { setError, removeError } from './error';
import {
  ADD_BOOKS,
  DELETE_BOOK,
  UNDO_DELETE_BOOK,
} from '../constants/actionTypes';
import TokenService from '../services/TokenService';

const bookService = new BookService();
const meService = new MeService();
const tokenService = new TokenService();

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
      const books = await bookService.addBooks(token);
      dispatch(addBooks(books));
    } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        dispatch(setError({ type: error.response.data.error }));
      } else {
        dispatch(setError({ type: 'UNKNOWN_ERROR' }));
      }
    }
    dispatch(endLoading());
  };
}

export function editBookThunk(bookId, bookReqParam, token) {
  return async dispatch => {
    dispatch(startLoading());
    try {
      await bookService.editBook(bookId, bookReqParam, token);
    } catch (error) {
      console.log(error);
    }
    dispatch(endLoading());
    dispatch(push('/'));
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
      await bookService.deleteBook(bookId, token);
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
      const book = await bookService.createBook(bookReqParam, token);
      console.log('success', book);
      // await fail();
    } catch (error) {
      console.log(error);
    }
    dispatch(endLoading());
    dispatch(push('/'));
  };
}

export function logoutThunk(token) {
  return async dispatch => {
    // 로컬 스토리지 파괴
    tokenService.remove();
    // 페이지 이동
    dispatch(push('/signin'));
    dispatch(removeError());
    // 서버에 로그아웃 했다고 전달
    try {
      await meService.logout(token);
    } catch (error) {
      console.log('logout failed', error);
    }
  };
}

// function fail() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('에러!!'));
//     }, 2000);
//   });
// }
