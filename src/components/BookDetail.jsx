import React from 'react';
import { PageHeader, Icon, Descriptions } from 'antd';
import styled from 'styled-components';

const StyledDescriptions = styled(Descriptions)`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
`;

class BookDetail extends React.Component {
  componentDidMount() {
    const { token, bookId } = this.props;
    this.props.receiveBookThunk(token, bookId);
  }

  render() {
    const { loading, book, back } = this.props;
    if (loading || book === null) {
      return <>Loading...</>;
    }

    return (
      <>
        <PageHeader
          onBack={back}
          title={
            <div>
              <Icon type="book" /> {book.title}
            </div>
          }
          subTitle={book.author}
        />
        <StyledDescriptions bordered>
          <Descriptions.Item label="Title">{book.title}</Descriptions.Item>
          <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
          <Descriptions.Item label="Created At">
            {book.createdAt}
          </Descriptions.Item>
          <Descriptions.Item label="Comment">{book.message}</Descriptions.Item>
          <Descriptions.Item label="Link">
            <a href={book.url} target="_BLANK" rel="noopener noreferrer">
              {book.url}
            </a>
          </Descriptions.Item>
        </StyledDescriptions>
      </>
    );
  }
}

export default BookDetail;
