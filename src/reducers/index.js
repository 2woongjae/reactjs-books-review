import { combineReducers } from "redux";
import books from "./books";
import loading from "./loading";
import error from "./error";

const reducers = combineReducers({
  books,
  loading,
  error
});

export default reducers;
