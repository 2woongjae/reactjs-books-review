import {
  SET_ERROR,
  CLEAR_ERROR,
  BOOKS_REJECTED,
  BOOKS_PENDING,
} from '../actions';

const initialState = null;

const error = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.error;
    case BOOKS_REJECTED:
      return action.payload;
    case CLEAR_ERROR:
    case BOOKS_PENDING:
      return null;
    default:
      return state;
  }
};

export default error;
