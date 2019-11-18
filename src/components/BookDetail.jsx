import React, { useEffect } from 'react';
import { PageHeader, Icon, Descriptions } from 'antd';

function BookDetail({ back, select, addBooksThunk }) {
  useEffect(() => {
    if (select === undefined) {
      console.log('here');
      addBooksThunk();
    }
  }, [addBooksThunk, select]);

  const book = select === undefined ? null : select.toJS();

  return (
    <>
      <PageHeader
        onBack={back}
        title={
          <div>
            <Icon type="form" /> Book
          </div>
        }
        subTitle="Your Faborite Book"
      />
      {book && (
        <Descriptions bordered layout="vertical" style={{ marginTop: 30 }}>
          <Descriptions.Item label="Title" span={2}>
            {book.title}
          </Descriptions.Item>
          <Descriptions.Item label="Author" span={1}>
            {book.author}
          </Descriptions.Item>
          <Descriptions.Item label="Message" span={3}>
            {book.message}
          </Descriptions.Item>
          <Descriptions.Item label="Url" span={3}>
            <a href={book.url} target="_BLANK" rel="noopener noreferrer">
              {book.url}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Created At" span={3}>
            {new Date(book.createdAt).toLocaleString()}
          </Descriptions.Item>
        </Descriptions>
      )}
    </>
  );
}
export default BookDetail;
