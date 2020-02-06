import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const create = () => {
  const token = localStorage.getItem('token');

  const store = createStore(
    reducer,
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(applyMiddleware(thunk)),
  );

  return store;
};

export default create;
