import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const StyledMenu = styled(Menu).attrs(() => ({
  theme: 'light',
  mode: 'horizontal',
}))`
  line-height: 64px;
  height: 64px;
`;

const MenuItem = styled(Menu.Item)``;

const StyledLink = styled(Link)`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.65);
  text-transform: uppercase;
  text-align: center;
`;

const StyledLogoutButton = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;

  &:hover {
    color: #1890ff;
  }
`;

const StyledMenuSubMenu = styled(Menu.SubMenu)`
  width: 200px;
  float: right;
  text-align: center;
`;

const StyledUser = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.65);
`;

const Navs = ({ token, logoutThunk }) => {
  if (token === null) {
    return <Redirect to={'/signin'} />;
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
            <StyledLogoutButton onClick={() => logoutThunk(token)}>
              SIGN OUT
            </StyledLogoutButton>
          </MenuItem>
        </StyledMenuSubMenu>
      )}
    </StyledMenu>
  );
};

export default Navs;
