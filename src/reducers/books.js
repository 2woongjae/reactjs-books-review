import { ADD_BOOKS } from "../actions";

const initialState = [];

const books = (state = initialState, action) => {
  console.log("books reducer", action);
  if (action.type === ADD_BOOKS) {
    return [...action.books];
  }
  return state;
};

export default books;
