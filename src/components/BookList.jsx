import React from 'react';
import Book from './Book';

export default class BookList extends React.Component {
  async componentDidMount() {
    const { token } = this.props;
    this.props.receiveBooksSaga(token);
  }

  render() {
    const { token, deleteBook, undoDeleteBook, loading, pathname } = this.props;
    const books = this.props.books.filter(book => book.deletedAt === null);
    if (loading) {
      return <div>로딩 중이야...</div>;
    }
    return (
      <div>
        <h1>{pathname}</h1>
        {books.map((book, index) => (
          <Book
            token={token}
            {...book}
            key={index}
            deleteBook={deleteBook}
            undoDeleteBook={undoDeleteBook}
          />
        ))}
      </div>
    );
  }
}
