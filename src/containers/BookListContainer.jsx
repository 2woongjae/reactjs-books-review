import { connect } from 'react-redux';
import { receiveBooksThunk, deleteBook, undoDeleteBook } from '../actions';
import BookList from '../components/BookList';

const mapStateToProps = state => ({
  token: state.token,
  books: state.books,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  receiveBooksThunk: token => {
    dispatch(receiveBooksThunk(token));
  },
  deleteBook: bookId => {
    dispatch(deleteBook(bookId));
  },
  undoDeleteBook: bookId => {
    dispatch(undoDeleteBook(bookId));
  },
});

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);

export default BookListContainer;
