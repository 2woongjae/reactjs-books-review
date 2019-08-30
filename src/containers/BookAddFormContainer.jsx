import { connect } from 'react-redux';
import BookAddForm from '../components/BookAddForm';
import { push } from 'connected-react-router';

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  back: () => {
    dispatch(push('/'));
  },
});

const BookAddFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookAddForm);

export default BookAddFormContainer;
