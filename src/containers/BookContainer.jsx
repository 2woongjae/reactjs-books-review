import { connect } from 'react-redux';
import { receiveBookThunk } from '../actions/book';
import BookDetail from '../components/BookDetail';
import { push } from 'connected-react-router';

const mapStateToProps = state => ({
  token: state.token,
  book: state.select,
  loading: state.loading,
  pathname: state.router.location.pathname,
});

const mapDispatchToProps = dispatch => ({
  receiveBookThunk: (token, bookId) => {
    dispatch(receiveBookThunk(token, bookId));
  },
  back: () => {
    dispatch(push('/'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookDetail);
