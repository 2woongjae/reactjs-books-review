import { connect } from 'react-redux';
import { receiveBooks, deleteBook, undoDeleteBook } from '../actions';
import BookList from '../components/BookList';

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  receiveBooks: books => {
    dispatch(receiveBooks(books));
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
