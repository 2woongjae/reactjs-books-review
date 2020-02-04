import {
  START_LOADING,
  END_LOADING,
  BOOKS_PENDING,
  BOOKS_REJECTED,
  BOOKS_FULFILLED,
} from '../actions';

const initialState = false;

const loading = (state = initialState, action) => {
  if (action.type === START_LOADING) {
    return true;
  } else if (action.type === END_LOADING) {
    return false;
  } else if (action.type === BOOKS_PENDING) {
    return true;
  } else if (action.type === BOOKS_FULFILLED) {
    return false;
  } else if (action.type === BOOKS_REJECTED) {
    return false;
  }
  return state;
};

export default loading;
