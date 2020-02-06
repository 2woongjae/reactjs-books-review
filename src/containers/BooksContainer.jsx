import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Books from '../components/Books';
import { startBooksSaga } from '../redux/modules/books';
import { useCallback } from 'react';

const BooksContainer = props => {
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(startBooksSaga());
  }, [dispatch]);

  return (
    <Books
      {...props}
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
    />
  );
};

export default BooksContainer;
