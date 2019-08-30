import { RECEIVE_BOOK } from '../constants/actionTypes';
import { Map } from 'immutable';

const initialState = null;

export default function books(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BOOK: {
      return Map(action.book).toObject();
    }

    default:
      return state;
  }
}
