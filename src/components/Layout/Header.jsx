import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavsContainer from '../../containers/NavsContainer';

const StyledHeader = styled(Layout.Header)`
  background-color: white;
`;

const StyledLink = styled(Link)`
  font-family: Roboto;
  font-size: 18px;
  color: #642828;
  text-transform: uppercase;
  text-align: center;

  &:hover {
    color: #642828;
  }
`;

const StyledHome = styled.div`
  width: 120px;
  height: 64px;
  float: left;
  margin-right: 20px;
`;

const Header = () => (
  <StyledHeader>
    <StyledHome>
      <StyledLink to="/">MARKTUBE</StyledLink>
    </StyledHome>
    <NavsContainer />
  </StyledHeader>
);

export default Header;
