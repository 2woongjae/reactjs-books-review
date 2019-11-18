import React from 'react';
import {
  StyledMenu,
  MenuItem,
  StyledLink,
  StyledMenuSubMenu,
  StyledUser,
  StyledLogoutButton,
} from './Navs.style';

function Navs({ token, logoutThunk }) {
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
            <StyledLogoutButton onClick={logoutThunk}>
              SIGN OUT
            </StyledLogoutButton>
          </MenuItem>
        </StyledMenuSubMenu>
      )}
    </StyledMenu>
  );
}

export default Navs;
