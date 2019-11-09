import React from 'react';
import { StyledHeader, StyledHome, StyledLink } from './Header.style';
import Navs from './Navs';

function Header({ token }) {
  return (
    <StyledHeader>
      <StyledHome>
        <StyledLink to="/">MARKTUBE</StyledLink>
      </StyledHome>
      <Navs token={token} />
    </StyledHeader>
  );
}

export default Header;
