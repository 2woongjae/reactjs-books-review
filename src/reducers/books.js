import {
  DELETE_BOOK,
  UNDO_DELETE_BOOK,
  ADD_BOOKS,
} from '../constants/actionTypes';
import { List, Map } from 'immutable';

const initialState = List([]);

export default function books(state = initialState, action) {
  if (action.type === ADD_BOOKS) {
    return state.clear().push(...action.books.map(book => Map(book)));
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
