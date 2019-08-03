import React from 'react';
import * as axios from 'axios';

function Book(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default class Home extends React.Component {
  state = {
    books: [
      {
        bookId: 1,
        ownerId: '7d26db27-168c-4c6a-bd9a-9e20677b60b8',
        title: '모던 자바스크립트 입문',
        message: '모던하군요',
        author: '서재원',
        url:
          'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160504439&orderClick=LET&Kc=',
        createdAt: '2019-05-15T07:18:14.000Z',
        updatedAt: '2019-06-07T22:56:50.000Z',
        deletedAt: null,
      },
    ],
  };

  async componentDidMount() {
    const { token } = this.props;
    try {
      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ books: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <h1>Home</h1>
        {books.map(book => (
          <Book {...book} key={book.bookId} />
        ))}
      </div>
    );
  }
}
