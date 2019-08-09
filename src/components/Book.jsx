import React from 'react';
import * as axios from 'axios';

export default function Book({
  token,
  bookId,
  title,
  message,
  author,
  url,
  deleteBook,
  undoDeleteBook,
}) {
  const click = async () => {
    console.log('삭제', bookId);
    deleteBook(bookId);
    try {
      await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
      undoDeleteBook(bookId);
    }
  };

  return (
    <div
      style={{
        border: '1px solid green',
        padding: 10,
        margin: 10,
      }}
    >
      <h2>{title}</h2>
      <p>{message}</p>
      <p>{author}</p>
      <p>
        <a href={url} target="_BLANK">
          {url}
        </a>
      </p>
      <p>
        <button onClick={click}>delete</button>
      </p>
    </div>
  );
}
