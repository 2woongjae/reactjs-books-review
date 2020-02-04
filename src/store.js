import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function create(initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
