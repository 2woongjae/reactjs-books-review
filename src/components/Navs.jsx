import React from 'react';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import {
  StyledMenu,
  MenuItem,
  StyledLink,
  StyledMenuSubMenu,
  StyledUser,
  StyledLogoutButton,
} from './Navs.style';

function Navs({ token, history }) {
  async function logout() {
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
    <StyledMenu>
      <MenuItem key="1">
        <StyledLink to="/add">Add Book</StyledLink>
      </MenuItem>
      {token && (
        <StyledMenuSubMenu key="2" title={<StyledUser>{'User'}</StyledUser>}>
          <MenuItem key="3">
            <StyledLink to="/profile">My Profile</StyledLink>
          </MenuItem>
          <MenuItem key="4">
            <StyledLogoutButton onClick={logout}>SIGN OUT</StyledLogoutButton>
          </MenuItem>
        </StyledMenuSubMenu>
      )}
    </StyledMenu>
  );
}

export default withRouter(Navs);
