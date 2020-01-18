import { SET_ERROR, CLEAR_ERROR } from "../actions";

const initialState = null;

const error = (state = initialState, action) => {
  console.log("error reducer", action);
  if (action.type === SET_ERROR) {
    return action.error;
  } else if (action.type === CLEAR_ERROR) {
    return null;
  }
  return state;
};

export default error;
