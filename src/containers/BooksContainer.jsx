import { connect } from "react-redux";
import Books from "../components/Books";
import { setBooksThunk, setBooksPromise, setBooksSaga } from "../actions";

const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  requestBooksThunk: token => {
    dispatch(setBooksThunk(token));
  },
  requestBooksPromise: token => {
    dispatch(setBooksPromise(token));
  },
  requestBooksSaga: token => {
    dispatch(setBooksSaga(token));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
