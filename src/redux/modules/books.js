import { takeEvery, put, call, select } from "redux-saga/effects";
import BookService from "../../services/BookService";
import { createActions, handleActions } from "redux-actions";

const options = {
  prefix: "reactjs-books-review/books"
};

// 액션 생성자 함수
const { getBooksPending, getBooksSuccess, getBooksFail } = createActions(
  {
    GET_BOOKS_SUCCESS: books => ({ books })
  },
  "GET_BOOKS_PENDING",
  "GET_BOOKS_FAIL",
  options
);

// 초기값
const initialState = {
  books: [],
  loading: false,
  error: null
};

// 리듀서
const books = handleActions(
  {
    GET_BOOKS_PENDING: (state, action) => ({
      books: [],
      loading: true,
      error: null
    }),
    GET_BOOKS_SUCCESS: (state, action) => ({
      books: action.payload.books,
      loading: false,
      error: null
    }),
    GET_BOOKS_FAIL: (state, action) => ({
      books: [],
      loading: false,
      error: action.payload
    })
  },
  initialState,
  options
);

export default books;

// 사가

// saga action type
const START_REQUEST_BOOKS_SAGA =
  "reactjs-books-review/books/START_REQUEST_BOOKS_SAGA";

// start saga action
export const requestBooksSaga = () => ({
  type: START_REQUEST_BOOKS_SAGA
});

function* requestBooks() {
  const token = yield select(state => state.auth.token);
  try {
    yield put(getBooksPending());
    const response = yield call(BookService.getBooks, token);
    const books = response.data;
    yield put(getBooksSuccess(books));
  } catch (error) {
    yield put(getBooksFail(error));
  }
}

export function* booksSaga() {
  yield takeEvery(START_REQUEST_BOOKS_SAGA, requestBooks);
}
