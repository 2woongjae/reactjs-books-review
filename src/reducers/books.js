import { SET_BOOKS, BOOKS_FULFILLED, BOOKS_FETCH_SUCCEEDED } from "../actions";

const initialState = [];

const books = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
    case BOOKS_FETCH_SUCCEEDED:
      return [...action.books];
    case BOOKS_FULFILLED:
      return [...action.payload.data];
    default:
      return state;
  }
};

export default books;
