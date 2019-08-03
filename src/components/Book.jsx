import React from 'react';
import * as axios from 'axios';

export default function Book(props) {
  const click = async () => {
    console.log('삭제', props.bookId);
    try {
      await axios.delete(`https://api.marktube.tv/v1/book/${props.bookId}`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      });
      // 갱신
      props.removeBook(props.bookId);
    } catch (error) {
      console.log(error);
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
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <p>{props.author}</p>
      <p>
        <a href={props.url} target="_BLANK">
          {props.url}
        </a>
      </p>
      <p>
        <button onClick={click}>delete</button>
      </p>
    </div>
  );
}
