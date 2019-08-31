import { connect } from 'react-redux';
import BookAdd from '../components/BookAdd';
import { push } from 'connected-react-router';
import { BookRequest } from '../services/RequestServices';

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  addBook: async (token, title, message, author, url) => {
    await BookRequest.addBook(token, title, message, author, url);
    dispatch(push('/'));
  },
  back: () => {
    dispatch(push('/'));
  },
});

const BookAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookAdd);

export default BookAddContainer;
