import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export const store = createStore(
  reducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunk, promise, sagaMiddleware),
  ),
);

sagaMiddleware.run(mySagas);
