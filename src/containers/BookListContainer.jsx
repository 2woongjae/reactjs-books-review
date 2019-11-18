import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { addBooksThunk, deleteBookThunk, removeError } from '../actions';
import { push } from 'connected-react-router';

const mapStateToProps = state => ({
  books: state.books.filter(book => book.get('deletedAt') === null),
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch, props) => ({
  addBooksThunk: () => {
    dispatch(addBooksThunk(props.token));
  },
  deleteBookThunk: bookId => {
    dispatch(deleteBookThunk(bookId, props.token));
  },
  detailBook: bookId => {
    dispatch(push(`book/${bookId}`));
  },
  editBook: bookId => {
    dispatch(push(`edit/${bookId}`));
  },
  removeError: () => {
    dispatch(removeError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
