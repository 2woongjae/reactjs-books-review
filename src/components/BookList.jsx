import React from 'react';
import Book from '../components/Book';
import axios from 'axios';
import { Spin, Button } from 'antd';
import { push } from 'connected-react-router';

export default class BookList extends React.Component {
  componentDidMount() {
    const { token, fetchRequest } = this.props;
    fetchRequest(token);
  }
  render() {
    const {
      books,
      deleteBook,
      undoDeleteBook,
      token,
      loading,
      startLoading,
      endLoading,
      deleteBookThunk,
      deleteBookPromise,
      dispatch,
    } = this.props;
    console.log(books);
    return (
      <div>
        <Spin spinning={loading}></Spin>
        <Button
          onClick={() => {
            dispatch(push('/profile'));
          }}
        >
          이동
        </Button>
        {books.map(book => {
          console.log(book.toJS());
          return (
            <Book
              {...book.toJS()}
              key={book.get('bookId')}
              token={token}
              deleteBook={deleteBook}
              undoDeleteBook={undoDeleteBook}
              startLoading={startLoading}
              endLoading={endLoading}
              deleteBookThunk={deleteBookThunk}
              deleteBookPromise={deleteBookPromise}
            />
          );
        })}
      </div>
    );
  }
}
