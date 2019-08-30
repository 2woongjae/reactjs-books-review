import React from 'react';
import { Input, Button, PageHeader, message, Icon } from 'antd';
import styled from 'styled-components';
import * as axios from 'axios';

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
  width: 520px;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  margin-left: 40px;
  margin-right: 40px;
`;

const ButtonArea = styled.div`
  text-align: right;
  padding-right: 40px;
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

class BookAddForm extends React.Component {
  _titleInput = React.createRef();
  _messageInput = React.createRef();
  _authorInput = React.createRef();
  _urlInput = React.createRef();

  state = {
    loading: false,
  };

  render() {
    const { back } = this.props;
    const { loading } = this.state;
    return (
      <div
        style={{
          marginLeft: 40,
          marginRight: 40,
          marginTop: 30,
          marginBottom: 50,
        }}
      >
        <PageHeader
          onBack={back}
          title={
            <div>
              <Icon type="form" /> Add Book
            </div>
          }
          subTitle="Add Your Faborite Book"
        />
        <div
          style={{
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
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
        </div>
      </div>
    );
  }

  _click = async () => {
    const { token, back } = this.props;
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
      back('/');
    } catch (error) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);

      this.setState({
        loading: false,
      });
    }
  };
}

export default BookAddForm;
