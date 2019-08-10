import { connect } from 'react-redux';
import {
  startReceiveBooks,
  receiveBooks,
  errorReceiveBooks,
  deleteBook,
  undoDeleteBook,
  receiveBooksThunk,
  receiveBooksPromise,
  receiveBooksSaga,
} from '../actions';
import BookList from '../components/BookList';
import * as axios from 'axios';

const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading,
  pathname: state.router.location.pathname,
});

const mapDispatchToProps = dispatch => ({
  receiveBooks: books => {
    dispatch(receiveBooks(books));
  },
  receiveBooksAsync: async token => {
    dispatch(startReceiveBooks());
    try {
      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTimeout(() => {
        dispatch(receiveBooks(response.data));
      }, 1000);
    } catch (error) {
      console.log(error);
      dispatch(errorReceiveBooks());
    }
  },
  receiveBooksThunk: token => {
    dispatch(receiveBooksThunk(token));
  },
  receiveBooksPromise: token => {
    dispatch(receiveBooksPromise(token));
  },
  receiveBooksSaga: token => {
    dispatch(receiveBooksSaga(token));
  },
  deleteBook: bookId => {
    dispatch(deleteBook(bookId));
  },
  undoDeleteBook: bookId => {
    dispatch(undoDeleteBook(bookId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
