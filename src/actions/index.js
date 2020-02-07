import { push } from "connected-react-router";
import BookService from "../services/BookService";
import LoginService from "../services/LoginService";
import { call, put } from "redux-saga/effects";

export const SET_BOOKS = "SET_BOOKS";

const setBooks = books => ({
  type: SET_BOOKS,
  books
});

export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export function startLoading() {
  return {
    type: START_LOADING
  };
}

export function endLoading() {
  return {
    type: END_LOADING
  };
}

export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const setError = error => ({
  type: SET_ERROR,
  error
});

export const clearError = () => ({
  type: CLEAR_ERROR
});

// thunk
export const setBooksThunk = token => async dispatch => {
  dispatch(startLoading());
  dispatch(clearError());
  try {
    const res = await BookService.getBooks(token);
    dispatch(setBooks(res.data));
    dispatch(endLoading());
  } catch (error) {
    console.log(error);
    dispatch(setError(error));
    dispatch(endLoading());
  }
};

export const BOOKS = "BOOKS";
export const BOOKS_PENDING = "BOOKS_PENDING";
export const BOOKS_FULFILLED = "BOOKS_FULFILLED";
export const BOOKS_REJECTED = "BOOKS_REJECTED";

// promise
export const setBooksPromise = token => ({
  type: BOOKS,
  payload: BookService.getBooks()
});

// token
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = token => ({
  type: SET_TOKEN,
  token
});

export const removeToken = () => ({
  type: REMOVE_TOKEN
});

// thunk
export const login = (email, password) => async dispatch => {
  try {
    dispatch(startLoading());
    dispatch(clearError());
    const res = await LoginService.login(email, password);
    localStorage.setItem("token", res.data.token); //
    dispatch(setToken(res.data.token));
    dispatch(push("/"));
  } catch (error) {
    console.log(error);
    dispatch(endLoading());
    // error feedback
    dispatch(setError(error));
  }
};

// saga

export const BOOKS_FETCH_REQUESTED = "BOOKS_FETCH_REQUESTED";
export const BOOKS_FETCH_SUCCEEDED = "BOOKS_FETCH_SUCCEEDED";
export const BOOKS_FETCH_FAILED = "BOOKS_FETCH_FAILED";

export function* fetchBooks(action) {
  try {
    const response = yield call(BookService.getBooks, action.token);
    console.log(response);
    yield put({ type: BOOKS_FETCH_SUCCEEDED, books: response.data });
  } catch (error) {
    yield put({ type: BOOKS_FETCH_FAILED, error });
  }
}

// 실제로 내가 실행하라고 하는 함수
export const setBooksSaga = token => ({
  type: BOOKS_FETCH_REQUESTED,
  token
});
