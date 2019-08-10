import { combineReducers } from 'redux';
import books from './books';
import loading from './loading';
import { connectRouter } from 'connected-react-router';

const reducer = history =>
  combineReducers({
    books,
    loading,
    router: connectRouter(history),
  });

export default reducer;
