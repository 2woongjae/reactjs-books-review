import React from 'react';
import { Input, Button, Col, message } from 'antd';
import styled from 'styled-components';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

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

const StyledSpan = styled.span.attrs(() => ({
  children: '*',
}))`
  color: #971931;
`;

class SigninForm extends React.Component {
  _titleInput = React.createRef();
  _messageInput = React.createRef();
  _authorInput = React.createRef();
  _urlInput = React.createRef();

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
        <InputTitle>
          Title
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput placeholder="Title" ref={this._titleInput} />
        </InputArea>
        <InputTitle top={10}>
          Comment
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput placeholder="Comment" ref={this._messageInput} />
        </InputArea>
        <InputTitle top={10}>Author</InputTitle>
        <InputArea>
          <StyledInput placeholder="Author" ref={this._authorInput} />
        </InputArea>
        <InputTitle top={10}>URL</InputTitle>
        <InputArea>
          <StyledInput placeholder="URL" ref={this._urlInput} />
        </InputArea>
        <ButtonArea>
          <StyledButton size="large" loading={loading} onClick={this._click}>
            추가하기
          </StyledButton>
        </ButtonArea>
      </Col>
    );
  }

  _click = async () => {
    const { history, token } = this.props;
    console.log(
      this._titleInput.current.state.value,
      this._messageInput.current.state.value,
      this._authorInput.current.state.value,
      this._urlInput.current.state.value,
    );
    const title = this._titleInput.current.state.value;
    const messageValue = this._messageInput.current.state.value;
    const author = this._authorInput.current.state.value;
    const url = this._urlInput.current.state.value;

    if (
      title === '' ||
      messageValue === '' ||
      title === undefined ||
      messageValue === undefined
    ) {
      message.error('머라도 적으세요');
      return;
    }

    this.setState({
      loading: true,
    });

    try {
      await axios.post(
        'https://api.marktube.tv/v1/book',
        {
          title,
          message: messageValue,
          author,
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      history.push('/');
    } catch (error) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);

      this.setState({
        loading: false,
      });
    }
  };
}

export default withRouter(SigninForm);
