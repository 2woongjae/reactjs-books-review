import { START_LOADING, END_LOADING } from '../constants/actionTypes';

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function endLoading() {
  return {
    type: END_LOADING,
  };
}
