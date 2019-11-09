import {
  BOOKS_FETCH_REQUESTED,
  BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED,
} from './actions';
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

async function getBooks(token) {
  const res = await axios.get('https://api.marktube.tv/v1/book', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}

function* fetchBooks(action) {
  try {
    const books = yield call(getBooks, action.payload.token);
    yield put({ type: BOOKS_FETCH_SUCCEEDED, books });
  } catch (e) {
    yield put({ type: BOOKS_FETCH_FAILED });
  }
}

function* mySaga() {
  yield takeLatest(BOOKS_FETCH_REQUESTED, fetchBooks);
}

export default mySaga;
