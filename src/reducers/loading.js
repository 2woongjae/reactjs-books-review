import {
  START_LOADING,
  END_LOADING,
  BOOKS_PENDING,
  BOOKS_FULFILLED,
  BOOKS_REJECTED,
  BOOKS_FETCH_REQUESTED,
  BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED
} from "../actions";

const initialState = false;

const loading = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
    case BOOKS_PENDING:
    case BOOKS_FETCH_REQUESTED:
      return true;
    case END_LOADING:
    case BOOKS_FULFILLED:
    case BOOKS_REJECTED:
    case BOOKS_FETCH_SUCCEEDED:
    case BOOKS_FETCH_FAILED:
      return false;
    default:
      return state;
  }
};

export default loading;
