import { connect } from 'react-redux';
import { setToken } from '../actions/token';
import * as axios from 'axios';
import SigninForm from '../components/SigninForm';
import { push } from 'connected-react-router';

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  login: async (email, password) => {
    const response = await axios.post('https://api.marktube.tv/v1/me', {
      email,
      password,
    });
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
