import { SET_ERROR, REMOVE_ERROR } from '../constants/actionTypes';

const initialState = null;

export default function error(state = initialState, action) {
  if (action.type === SET_ERROR) {
    return action.error;
  } else if (action.type === REMOVE_ERROR) {
    return null;
  }
  return state;
}
