import { connect } from 'react-redux';
import { receiveBooksThunk } from '../actions/books';
import { deleteBook, undoDeleteBook } from '../actions/book';
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
