import { connect } from 'react-redux';
import Books from '../components/Books';
import { setBooksThunk, setBooksPromise } from '../actions';

const mapStateToProps = state => ({
  token: state.token,
  books: state.books,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  setBooks: token => {
    dispatch(setBooksThunk(token));
  },
  setBooksPromise: token => {
    dispatch(setBooksPromise(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
