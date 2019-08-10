import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as axios from 'axios';
import {
  BOOKS_FETCH_REQUESTED,
  BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED,
} from './actions';

async function getBooks(token) {
  const response = await axios.get('https://api.marktube.tv/v1/book', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// BOOKS_FETCH_REQUESTED 액션으로 시작
function* fetchBooks(action) {
  try {
    const books = yield call(getBooks, action.payload.token);
    yield put({ type: BOOKS_FETCH_SUCCEEDED, books });
  } catch (e) {
    yield put({ type: BOOKS_FETCH_FAILED });
  }
}

// BOOKS_FETCH_REQUESTED 액션을 실행할 수 있도록 등록하는 함수
function* mySaga() {
  yield takeLatest(BOOKS_FETCH_REQUESTED, fetchBooks);
}

export default mySaga;
