import {
  SET_ERROR,
  CLEAR_ERROR,
  BOOKS_REJECTED,
  BOOKS_PENDING,
  BOOKS_FETCH_REQUESTED,
  BOOKS_FETCH_FAILED
} from "../actions";

const initialState = null;

const error = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
    case BOOKS_FETCH_FAILED:
      return action.error;
    case BOOKS_REJECTED:
      return action.payload;
    case CLEAR_ERROR:
    case BOOKS_PENDING:
    case BOOKS_FETCH_REQUESTED:
      return null;
    default:
      return state;
  }
};

export default error;
