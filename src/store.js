import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

const store = createStore(
  reducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)),
);

export default store;
