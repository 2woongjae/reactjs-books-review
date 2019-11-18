import { combineReducers } from 'redux';
import books from './books';
import loading from './loading';
import error from './error';
import { connectRouter } from 'connected-react-router';

const reducer = history =>
  combineReducers({
    books,
    loading,
    error,
    router: connectRouter(history),
  });

export default reducer;
