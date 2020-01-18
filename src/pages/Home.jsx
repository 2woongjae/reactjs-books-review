import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  addBooks,
  startLoading,
  endLoading,
  setError,
  clearError
} from "../actions";

function Book(props) {
  return <div>title : {props.title}</div>;
}

const Home = ({ token, books, loading, error, requestBooks }) => {
  useEffect(() => {
    requestBooks(token);
  }, [token]);

  return (
    <div>
      <h1>Home {loading && "(loading...)"}</h1>
      {error !== null && <p>{error.message}</p>}
      {books.map(book => (
        <Book title={book.title} key={book.bookId} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  requestBooks: token => {
    dispatch(startLoading());
    dispatch(clearError());
    axios
      .get("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        dispatch(addBooks(res.data));
        dispatch(endLoading());
      })
      .catch(error => {
        console.log(error);
        dispatch(setError(error));
        dispatch(endLoading());
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
