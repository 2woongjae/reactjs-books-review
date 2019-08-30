import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
`;

const StyledLink = styled(Link)`
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  line-height: 2.03;
  color: white;
  text-transform: uppercase;
`;

const FooterColumnLink = ({ to, children }) => (
  <StyledDiv>
    <StyledLink to={to}>{children}</StyledLink>
  </StyledDiv>
);

export default FooterColumnLink;
