import React from 'react';
import Book from './Book';
import * as axios from 'axios';

export default class BookList extends React.Component {
  async componentDidMount() {
    const { token } = this.props;
    try {
      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.props.receiveBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { token, deleteBook, undoDeleteBook } = this.props;
    const books = this.props.books.filter(book => book.deletedAt === null);
    return (
      <div>
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
