import React, { useEffect } from 'react';
import Book from '../components/Book';
import { Spin, Alert } from 'antd';

export default function BookList({
  books,
  loading,
  deleteBookThunk,
  detailBook,
  addBooksThunk,
  editBook,
  error,
  removeError,
}) {
  useEffect(() => {
    addBooksThunk();
  }, [addBooksThunk]);
  console.log(error);
  return (
    <div>
      {error && (
        <Alert
          message={error.type}
          type="error"
          closable
          onClose={removeError}
        />
      )}
      <Spin spinning={loading}>
        {books.map(book => {
          return (
            <Book
              {...book.toJS()}
              key={book.get('bookId')}
              editBook={() => editBook(book.get('bookId'))}
              deleteBook={() => deleteBookThunk(book.get('bookId'))}
              detailBook={() => detailBook(book.get('bookId'))}
            />
          );
        })}
      </Spin>
    </div>
  );
}
