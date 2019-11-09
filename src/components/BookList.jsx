import React from 'react';
import Book from '../components/Book';
import { Spin } from 'antd';

export default class BookList extends React.Component {
  componentDidMount() {
    const { token, addBooksThunk } = this.props;
    addBooksThunk(token);
  }
  render() {
    const { books, loading } = this.props;
    return (
      <div>
        <Spin spinning={loading}>
          {books.map(book => {
            return (
              <Book
                {...book.toJS()}
                key={book.get('bookId')}
                deleteBook={() => this.deleteBook(book.get('bookId'))}
              />
            );
          })}
        </Spin>
      </div>
    );
  }

  deleteBook = bookId => {
    const { token, deleteBookThunk } = this.props;
    deleteBookThunk(bookId, token);
  };
}
