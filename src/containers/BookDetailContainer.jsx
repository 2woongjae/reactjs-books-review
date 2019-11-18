import { connect } from 'react-redux';
import BookDetail from '../components/BookDetail';
import { addBooksThunk } from '../actions';
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
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
