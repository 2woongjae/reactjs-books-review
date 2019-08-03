import React from 'react';
import * as axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

function Navs({ token, history }) {
  const logout = async () => {
    console.log('로그아웃');
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('token');
    history.push('/signin');
  };
  return (
    <ul>
      <li>
        <Link to="/add">책 추가하기</Link>
      </li>
      <li>
        <button onClick={logout}>로그아웃</button>
      </li>
    </ul>
  );
}

export default withRouter(Navs);
