import {
  START_LOADING,
  END_LOADING,
  DELETE_PENDING,
  DELETE_REJECTED,
  DELETE_FULFILLED,
} from '../actions';

const initialState = false;

export default function loading(state = initialState, action) {
  if (action.type === START_LOADING || action.type === DELETE_PENDING) {
    return true;
  } else if (
    action.type === END_LOADING ||
    action.type === DELETE_REJECTED ||
    action.type === DELETE_FULFILLED
  ) {
    return false;
  }
  return state;
}
