import { createStore } from 'redux';
import reducer from './reducer';

export default function create(initialState) {
  return createStore(reducer, initialState);
}
