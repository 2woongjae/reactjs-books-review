export const ADD_BOOKS = "ADD_BOOKS";

export function addBooks(books) {
  return {
    type: ADD_BOOKS,
    books
  };
}

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

export function setError(error) {
  return {
    type: SET_ERROR,
    error
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR
  };
}
