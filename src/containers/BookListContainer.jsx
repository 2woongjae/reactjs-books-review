import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { addBooksThunk, deleteBookThunk } from '../actions';

const mapStateToProps = state => ({
  books: state.books.filter(book => book.get('deletedAt') === null),
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  addBooksThunk: token => {
    dispatch(addBooksThunk(token));
  },
  deleteBookThunk: (bookId, token) => {
    dispatch(deleteBookThunk(bookId, token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
