import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const token = localStorage.getItem('token');

export const store = createStore(
  reducer(history),
  {
    token,
  },
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)),
);
