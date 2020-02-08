import { createStore, applyMiddleware } from "redux";
import reducer from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

const create = token =>
  createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null
      }
    },
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );

export default create;
