import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga'; // 1. import
import rootSaga from './modules/saga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware(); // 2. saga 미들웨어 생성

const create = () => {
  const token = localStorage.getItem('token');

  const store = createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(thunk, routerMiddleware(history), sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
