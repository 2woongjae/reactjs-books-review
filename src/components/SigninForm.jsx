import React from 'react';
import { Input, Button, Divider, Col, message } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

const Title = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  margin-top: 60px;
  text-align: center;
`;

const InputTitle = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: ${props => props.top || '40'}px;
  text-align: left;
  padding-left: 40px;
`;

const InputArea = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledInput = styled(Input)`
  width: 320px;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  margin-left: 40px;
  margin-right: 40px;
`;

const ButtonArea = styled.div`
  text-align: left;
  padding-left: 40px;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  border-color: #28546a;
  background-color: #28546a;
  text-transform: uppercase;
  border-radius: 1px;
  border-width: 2px;
  color: white;
  width: 120px;

  &:hover {
    background-color: #28546a;
    color: white;
  }
`;

const DividerArea = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
`;

const LinkArea = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 15px;
  overflow: hidden;
`;

const LinkTitle = styled.div`
  float: left;
  padding-top: 5px;
`;

const StyledSpan = styled.span.attrs(() => ({
  children: '*',
}))`
  color: #971931;
`;

const LinkButtonArea = styled.div`
  float: right;
`;

const LinkButton = styled(Button)`
  background-color: #f3f7f8;
  border-color: #28546a;
  color: #28546a;
  text-transform: uppercase;
  border-radius: 1px;
  border-width: 2px;

  &:hover {
    background-color: #28546a;
    color: white;
  }
`;

class SigninForm extends React.Component {
  _emailInput = React.createRef();
  _passwordInput = React.createRef();

  state = {
    loading: false,
  };

  render() {
    const { loading } = this.state;
    return (
      <Col
        span={12}
        style={{
          verticalAlign: 'top',
        }}
      >
        <Title>Log In. Start Searching.</Title>
        <InputTitle>
          Email
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput placeholder="Email" ref={this._emailInput} />
        </InputArea>
        <InputTitle top={10}>
          Password
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput type="password" ref={this._passwordInput} />
        </InputArea>
        <ButtonArea>
          <StyledButton size="large" loading={loading} onClick={this._click}>
            Sign In
          </StyledButton>
        </ButtonArea>
        <DividerArea>
          <Divider />
        </DividerArea>
        <LinkArea>
          <LinkTitle>Need to create an account?</LinkTitle>
          <LinkButtonArea>
            <Link to="/signup">
              <LinkButton>Sign up</LinkButton>
            </Link>
          </LinkButtonArea>
        </LinkArea>
        <LinkArea>
          <LinkTitle>Forgot your password?</LinkTitle>
          <LinkButtonArea>
            <Link to="/forgot">
              <LinkButton>Recovery</LinkButton>
            </Link>
          </LinkButtonArea>
        </LinkArea>
      </Col>
    );
  }

  _click = async () => {
    const { history } = this.props;
    console.log(
      this._emailInput.current.state.value,
      this._passwordInput.current.state.value,
    );
    const email = this._emailInput.current.state.value;
    const password = this._passwordInput.current.state.value;

    if (email === '' || password === '') {
      message.error('머라도 적으세요');
      return;
    }

    this.setState({
      loading: true,
    });

    try {
      const response = await axios.post('https://api.marktube.tv/v1/me', {
        email,
        password,
      });
      const token = response.data.token;
      console.log(token);
      //
      localStorage.setItem('token', token);
      history.push('/');
    } catch (error) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);

      this.setState({
        loading: false,
      });
    }

    // https://api.marktube.tv/v1/me post {email, password}
  };
}

export default withRouter(SigninForm);
