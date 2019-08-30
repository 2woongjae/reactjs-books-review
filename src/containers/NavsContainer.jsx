import { connect } from 'react-redux';
import { logoutThunk } from '../actions/token';
import Navs from '../components/Layout/Navs';

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  logoutThunk: token => {
    dispatch(logoutThunk(token));
  },
});

const NavsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navs);

export default NavsContainer;
