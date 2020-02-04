import React from 'react';
import { useEffect } from 'react';

const Books = ({ token, books, setBooks }) => {
  useEffect(() => {
    setBooks(token);
  }, [token, setBooks]);

  return (
    <ul>
      {books.map(book => (
        <li key={book.bookId}>{book.title}</li>
      ))}
    </ul>
  );
};

export default Books;
