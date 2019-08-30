import { combineReducers } from 'redux';
import token from './token';
import books from './books';
import select from './select';
import loading from './loading';
import { connectRouter } from 'connected-react-router';

const reducer = history =>
  combineReducers({
    token,
    books,
    select,
    loading,
    router: connectRouter(history),
  });

export default reducer;
