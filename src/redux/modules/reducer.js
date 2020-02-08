import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import books from "./books";
import auth from "./auth";

const reducer = history =>
  combineReducers({
    books,
    auth,
    router: connectRouter(history)
  });

export default reducer;
