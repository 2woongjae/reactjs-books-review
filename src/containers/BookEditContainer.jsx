import { connect } from 'react-redux';
import BookEdit from '../components/BookEdit';
import { addBooksThunk, editBookThunk } from '../actions';
import { goBack } from 'connected-react-router';

const mapStateToProps = (state, props) => ({
  loading: state.loading,
  select: state.books
    .filter(
      book => book.get('deletedAt') === null && book.get('bookId') === props.id,
    )
    .get(0),
});

const mapDispatchToProps = (dispatch, props) => ({
  addBooksThunk: () => {
    dispatch(addBooksThunk(props.token));
  },
  back: () => {
    dispatch(goBack());
  },
  editBookThunk: (bookId, bookReqParam) => {
    dispatch(editBookThunk(bookId, bookReqParam, props.token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);
