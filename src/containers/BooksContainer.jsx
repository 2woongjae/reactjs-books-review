import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Books from "../components/Books";
import { requestBooksSaga } from "../redux/modules/books";

const BooksContainer = props => {
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  const dispatch = useDispatch();

  const requestBooks = useCallback(() => {
    dispatch(requestBooksSaga());
  }, [dispatch]);

  return (
    <Books
      {...props}
      books={books}
      loading={loading}
      error={error}
      requestBooks={requestBooks}
    />
  );
};

export default BooksContainer;
