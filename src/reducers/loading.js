import {
  START_RECEIVE_BOOKS,
  RECEIVE_BOOKS,
  ERROR_RECEIVE_BOOKS,
  BOOKS_FETCH_REQUESTED,
  BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED,
} from '../actions';

const initialState = false;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case 'BOOKS_PENDING':
    case BOOKS_FETCH_REQUESTED:
    case START_RECEIVE_BOOKS: {
      return true;
    }

    case 'BOOKS_FULFILLED':
    case BOOKS_FETCH_SUCCEEDED:
    case RECEIVE_BOOKS: {
      return false;
    }

    case 'BOOKS_REJECTED':
    case BOOKS_FETCH_FAILED:
    case ERROR_RECEIVE_BOOKS: {
      return false;
    }

    default:
      return state;
  }
}
