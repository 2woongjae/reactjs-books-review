import { combineReducers } from "redux";
import books from "./books";
import loading from "./loading";
import error from "./error";
import token from "./token";
import { connectRouter } from "connected-react-router";

const reducers = history =>
  combineReducers({
    books,
    loading,
    error,
    token,
    router: connectRouter(history)
  });

export default reducers;
