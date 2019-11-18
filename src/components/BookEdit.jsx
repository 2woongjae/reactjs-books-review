import React, { useEffect } from 'react';
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

function BookEdit({ back, loading, editBookThunk, select, addBooksThunk }) {
  const titleInput = React.createRef();
  const messageInput = React.createRef();
  const authorInput = React.createRef();
  const urlInput = React.createRef();

  useEffect(() => {
    if (select === undefined) {
      addBooksThunk();
    }
  }, [addBooksThunk, select]);

  const book = select === undefined ? null : select.toJS();

  async function click() {
    // ...
    const title = titleInput.current.state.value;
    const message = messageInput.current.state.value;
    const author = authorInput.current.state.value;
    const url = urlInput.current.state.value;

    console.log(title, message, author, url);

    // 유효성 검사는 각자

    editBookThunk(book.bookId, {
      title,
      message,
      author,
      url,
    });
  }

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
      {book && (
        <StyledDiv>
          <InputTitle>
            Title
            <StyledSpan />
          </InputTitle>
          <InputArea>
            <StyledInput
              placeholder="Title"
              ref={titleInput}
              defaultValue={book.title}
            />
          </InputArea>
          <InputTitle top={10}>
            Comment
            <StyledSpan />
          </InputTitle>
          <InputArea>
            <StyledInput
              placeholder="Comment"
              ref={messageInput}
              defaultValue={book.message}
            />
          </InputArea>
          <InputTitle top={10}>Author</InputTitle>
          <InputArea>
            <StyledInput
              placeholder="Author"
              ref={authorInput}
              defaultValue={book.author}
            />
          </InputArea>
          <InputTitle top={10}>URL</InputTitle>
          <InputArea>
            <StyledInput
              placeholder="URL"
              ref={urlInput}
              defaultValue={book.url}
            />
          </InputArea>
          <ButtonArea>
            <StyledButton size="large" loading={loading} onClick={click}>
              수정하기
            </StyledButton>
          </ButtonArea>
        </StyledDiv>
      )}
    </>
  );
}

export default BookEdit;
