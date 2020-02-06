import { connect } from 'react-redux';
import Books from '../components/Books';
import { getBooks } from '../redux/modules/books';

const mapStateToProps = state => ({
  token: state.auth.token,
  books: state.books.books,
  loading: state.books.loading,
  error: state.books.error,
});

const mapDispatchToProps = dispatch => ({
  getBooks: token => {
    dispatch(getBooks(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
