import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
console.log(createSagaMiddleware);

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

const initStore = token =>
  createStore(
    reducers(history),
    {
      token
    },
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), thunk, promise, sagaMiddleware)
    )
  );

export default initStore;
