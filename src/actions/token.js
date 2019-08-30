import * as axios from 'axios';
import { REMOVE_TOKEN, SET_TOKEN } from '../constants/actionTypes';

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
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('token');
    dispatch(removeToken());
  };
}
