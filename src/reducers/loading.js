import {
  START_RECEIVE_BOOKS,
  RECEIVE_BOOKS,
  ERROR_RECEIVE_BOOKS,
  START_RECEIVE_BOOK,
  RECEIVE_BOOK,
  ERROR_RECEIVE_BOOK,
} from '../constants/actionTypes';

const initialState = false;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case START_RECEIVE_BOOK:
    case START_RECEIVE_BOOKS: {
      return true;
    }

    case RECEIVE_BOOK:
    case RECEIVE_BOOKS: {
      return false;
    }

    case ERROR_RECEIVE_BOOK:
    case ERROR_RECEIVE_BOOKS: {
      return false;
    }

    default:
      return state;
  }
}
