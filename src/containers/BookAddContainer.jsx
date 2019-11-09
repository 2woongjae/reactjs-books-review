import { connect } from 'react-redux';
import BookAdd from '../components/BookAdd';
import { createBookThunk } from '../actions';
import { goBack } from 'connected-react-router';

const mapStateToProps = state => ({
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  back: () => {
    dispatch(goBack());
  },
  createBookThunk: (bookReqParam, token) => {
    dispatch(createBookThunk(bookReqParam, token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookAdd);
