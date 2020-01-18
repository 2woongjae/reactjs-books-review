import { START_LOADING, END_LOADING } from "../actions";

const initialState = false;

const loading = (state = initialState, action) => {
  console.log("loading reducer", action);
  if (action.type === START_LOADING) {
    return true;
  } else if (action.type === END_LOADING) {
    return false;
  }
  return state;
};

export default loading;
