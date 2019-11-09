import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const store = createStore(
  reducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware, thunk, promise),
  ),
);

sagaMiddleware.run(mySaga);

export default store;
