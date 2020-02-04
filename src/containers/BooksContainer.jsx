import { connect } from 'react-redux';
import Books from '../components/Books';
import { setBooksThunk } from '../actions';

const mapStateToProps = state => ({
  token: state.token,
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  setBooks: token => {
    dispatch(setBooksThunk(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
