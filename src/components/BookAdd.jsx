import React from 'react';
import { PageHeader, Icon } from 'antd';
import {
  StyledDiv,
  InputTitle,
  StyledSpan,
  InputArea,
  StyledInput,
  ButtonArea,
  StyledButton,
} from './BookAdd.style';

class BookAdd extends React.Component {
  _titleInput = React.createRef();
  _messageInput = React.createRef();
  _authorInput = React.createRef();
  _urlInput = React.createRef();

  render() {
    const { back, loading } = this.props;
    return (
      <>
        <PageHeader
          onBack={back}
          title={
            <div>
              <Icon type="form" /> Add Book
            </div>
          }
          subTitle="Add Your Faborite Book"
        />
        <StyledDiv>
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
        </StyledDiv>
      </>
    );
  }
  _click = async () => {
    const { createBookThunk, token } = this.props;
    // ...
    const title = this._titleInput.current.state.value;
    const message = this._messageInput.current.state.value;
    const author = this._authorInput.current.state.value;
    const url = this._urlInput.current.state.value;

    console.log(title, message, author, url);

    // 유효성 검사는 각자

    createBookThunk(
      {
        title,
        message,
        author,
        url,
      },
      token,
    );
  };
}
export default BookAdd;
