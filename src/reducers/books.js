import {
  BOOKS_FETCH_SUCCEEDED,
  DELETE_BOOK,
  UNDO_DELETE_BOOK,
} from '../actions';
import { List, Map } from 'immutable';

const initialState = List([]);

export default function books(state = initialState, action) {
  if (action.type === BOOKS_FETCH_SUCCEEDED) {
    return state.push(...action.books.map(book => Map(book)));
  } else if (action.type === DELETE_BOOK) {
    return state.map(book => {
      if (book.get('bookId') === action.bookId) {
        return book.set('deletedAt', new Date().toISOString());
      }
      return book;
    });
  } else if (action.type === UNDO_DELETE_BOOK) {
    return state.map(book => {
      if (book.get('bookId') === action.bookId) {
        return book.set('deletedAt', null);
      }
      return book;
    });
  }
  return state;
}
