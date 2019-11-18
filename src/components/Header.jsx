import React from 'react';
import { StyledHeader, StyledHome, StyledLink } from './Header.style';
import NavsContainer from '../containers/NavsContainer';

function Header({ token }) {
  return (
    <StyledHeader>
      <StyledHome>
        <StyledLink to="/">MARKTUBE</StyledLink>
      </StyledHome>
      <NavsContainer token={token} />
    </StyledHeader>
  );
}

export default Header;
