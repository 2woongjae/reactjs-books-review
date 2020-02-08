import SigninForm from "../components/SigninForm";
import { connect } from "react-redux";
import { loginSaga } from "../redux/modules/auth";

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(loginSaga(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
