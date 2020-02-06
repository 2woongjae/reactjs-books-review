import React from 'react';
import { useEffect } from 'react';

const Books = ({ books, getBooks, error, loading }) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

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
