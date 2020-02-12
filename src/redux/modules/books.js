import BookService from '../../services/BookService';
import {
  put,
  delay,
  call,
  takeEvery,
  takeLatest,
  takeLeading,
  select,
} from 'redux-saga/effects';
import { createAction, createActions, handleActions } from 'redux-actions';

const options = {
  prefix: 'reactjs-books-review/books',
};

const { success, pending, fail } = createActions(
  {
    SUCCESS: books => ({ books }),
  },
  'PENDING',
  'FAIL',
  options,
);

export { success };

// saga
export const startBooksSaga = createAction('START_BOOKS_SAGA');

function* getBooksSaga() {
  // 비동기 로직
  const token = yield select(state => state.auth.token);
  try {
    yield put(pending());
    yield delay(2000);
    const res = yield call(BookService.getBooks, token);
    yield put(success(res.data));
  } catch (error) {
    yield put(fail(error));
  }
}

// 내가 만든 비동기 로직 (나의 사가 함수 : getBooksSaga) 을 등록하는 사가 함수
export function* booksSaga() {
  // yield takeEvery(START_BOOKS_SAGA, getBooksSaga);
  // yield takeLatest(START_BOOKS_SAGA, getBooksSaga);
  yield takeLeading('START_BOOKS_SAGA', getBooksSaga);
}

// 초기값
const initialState = {
  books: [],
  loading: false,
  error: null,
};

const books = handleActions(
  {
    PENDING: (state, action) => ({ books: [], loading: true, error: null }),
    SUCCESS: (state, action) => ({
      books: action.payload.books,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      books: [],
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options,
);

export default books;
