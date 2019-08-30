import { REMOVE_TOKEN, SET_TOKEN } from '../constants/actionTypes';

const initialState = null;

export default function token(state = initialState, action) {
  switch (action.type) {
    case REMOVE_TOKEN:
      return null;
    case SET_TOKEN:
      return action.token;

    default:
      return state;
  }
}
