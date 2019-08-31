import { REMOVE_TOKEN, SET_TOKEN } from '../constants/actionTypes';
import { AuthRequest } from '../services/RequestServices';

function removeToken() {
  return {
    type: REMOVE_TOKEN,
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function logoutThunk(token) {
  return async dispatch => {
    try {
      await AuthRequest.logout(token);
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('token');
    dispatch(removeToken());
  };
}
