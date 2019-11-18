import { connect } from 'react-redux';
import Navs from '../components/Navs';
import { logoutThunk } from '../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({
  logoutThunk: async () => {
    dispatch(logoutThunk(props.token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navs);
