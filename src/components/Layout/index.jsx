import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const Layout = ({ children }) => (
  <div>
    <Head />
    <Header />
    <StyledDiv>{children}</StyledDiv>
    <Footer />
  </div>
);

export default Layout;
