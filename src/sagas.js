import { takeEvery, takeLatest } from "redux-saga/effects";
import { BOOKS_FETCH_REQUESTED } from "./actions";
import { fetchBooks } from "./actions";

function* mySagas() {
  yield takeLatest(BOOKS_FETCH_REQUESTED, fetchBooks);
}

export default mySagas;
