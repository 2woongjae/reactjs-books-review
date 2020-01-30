import React, { useEffect, useState } from 'react';
import withAuth from '../hocs/withAuth';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeToken } from '../actions';

const Home = ({ token }) => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  console.log(token);
  useEffect(() => {
    axios
      .get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      });
  }, [token]);

  async function logout() {
    // 서버에 알려주기
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }

    // 토큰 지우기
    localStorage.removeItem('token');

    // 리덕스 토큰 지우기
    dispatch(removeToken());
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>로그 아웃</button>
      <ul>
        {books.map(book => (
          <li key={book.bookId}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(Home);
