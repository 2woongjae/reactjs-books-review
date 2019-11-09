import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import { StyledDiv } from './Layout.style';

export default function({ token, children }) {
  return (
    <div>
      <Head />
      <Header token={token} />
      <StyledDiv>{children}</StyledDiv>
      <Footer />
    </div>
  );
}
