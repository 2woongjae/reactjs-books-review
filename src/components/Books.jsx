import React from 'react';
import { useEffect } from 'react';

const Books = ({ token, books, setBooks, setBooksPromise, error, loading }) => {
  useEffect(() => {
    // setBooks(token);
    setBooksPromise(token);
  }, [token, setBooksPromise]);

  if (error !== null) {
    return <div>에러다</div>;
  }

  return (
    <>
      {loading && <p>로딩 중...</p>}
      <ul>
        {books.map(book => (
          <li key={book.bookId}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Books;
