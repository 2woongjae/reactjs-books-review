import React from 'react';
import { Button } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

function Header({ history, token }) {
  async function click() {
    // 로컬 스토리지 파괴
    localStorage.removeItem('token');
    // 페이지 이동
    history.push('/signin');
    // 서버에 로그아웃 했다고 전달
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log('logout failed', error);
    }
  }
  return (
    <div>
      헤더
      <Button onClick={click}>로그 아웃</Button>
      <Link to="/profile">
        <Button>Profile</Button>
      </Link>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}

export default withRouter(Header);
