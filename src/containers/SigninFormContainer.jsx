import { connect } from 'react-redux';
import { setToken } from '../actions';
import SigninForm from '../components/Signin/SigninForm';
import { push } from 'connected-react-router';
import { AuthRequest } from '../services/RequestServices';

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  login: async (email, password) => {
    const response = await AuthRequest.login(email, password);
    const token = response.data.token;

    localStorage.setItem('token', token);
    dispatch(setToken(token));
    dispatch(push('/'));
  },
});

const SigninFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninForm);

export default SigninFormContainer;
