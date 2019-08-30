import React from 'react';
import Book from './Book';
import { Table, PageHeader, Icon } from 'antd';

export default class BookList extends React.Component {
  async componentDidMount() {
    const { token } = this.props;
    this.props.receiveBooksThunk(token);
  }

  render() {
    const { token, deleteBook, undoDeleteBook, loading } = this.props;
    const books = this.props.books.filter(book => book.deletedAt === null);
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
          title={
            <div>
              <Icon type="like" /> Book List
            </div>
          }
          subTitle="Faborite Book List"
        />
        <Table
          dataSource={books}
          columns={[
            {
              title: 'Book',
              dataIndex: 'book',
              key: 'book',
              render: (text, record, index) => (
                <Book
                  token={token}
                  {...record}
                  key={index}
                  deleteBook={deleteBook}
                  undoDeleteBook={undoDeleteBook}
                />
              ),
            },
          ]}
          showHeader={false}
          pagination={{
            size: 'small',
            pageSize: 10,
            align: 'center',
          }}
          bodyStyle={{
            borderTop: '1px solid #e8e8e8',
          }}
          style={{
            marginTop: 30,
          }}
          rowKey="bookId"
          loading={loading}
        />
      </div>
    );
  }
}
