import { connect } from 'react-redux';
import BookList from '../components/BookList';
import {
  addBooks,
  deleteBook,
  undoDeleteBook,
  startLoading,
  endLoading,
  deleteBookThunk,
  deleteBookPromise,
  fetchRequest,
} from '../actions';
import { push } from 'connected-react-router';

const mapStateToProps = state => ({
  books: state.books.filter(book => book.get('deletedAt') === null),
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  addBooks: books => {
    dispatch(addBooks(books));
  },
  deleteBook: bookId => {
    dispatch(deleteBook(bookId));
  },
  undoDeleteBook: bookId => {
    dispatch(undoDeleteBook(bookId));
  },
  startLoading: () => {
    dispatch(startLoading());
  },
  endLoading: () => {
    dispatch(endLoading());
  },
  deleteBookThunk: bookId => {
    dispatch(deleteBookThunk(bookId));
  },
  deleteBookPromise: bookId => {
    dispatch(deleteBookPromise(bookId));
  },
  move: url => {
    dispatch(push(url));
  },
  dispatch,
  fetchRequest: token => {
    dispatch(fetchRequest(token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
