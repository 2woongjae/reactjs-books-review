import React, { useState, useEffect } from "react";
import axios from "axios";

function Book(props) {
  return <div>title : {props.title}</div>;
}

const Home = ({ token }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log(token);
    axios
      .get("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [token]);

  return (
    <div>
      <h1>Home</h1>
      {books.map(book => (
        <Book title={book.title} key={book.bookId} />
      ))}
    </div>
  );
};

export default Home;
