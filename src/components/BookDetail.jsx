import React from 'react';
import { PageHeader, Icon, Descriptions } from 'antd';

class BookDetail extends React.Component {
  componentDidMount() {
    const { token, bookId } = this.props;
    this.props.receiveBookThunk(token, bookId);
  }

  render() {
    const { loading, book, back } = this.props;
    if (loading || book === null) {
      return (
        <div
          style={{
            marginLeft: 40,
            marginRight: 40,
            marginTop: 30,
            marginBottom: 50,
          }}
        >
          Loading...
        </div>
      );
    }

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
              <Icon type="book" /> {book.title}
            </div>
          }
          subTitle={book.author}
        />
        <Descriptions
          bordered
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
          }}
        >
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
        </Descriptions>
      </div>
    );
  }
}

export default BookDetail;
