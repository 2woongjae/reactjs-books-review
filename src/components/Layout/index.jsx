import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ token, children }) => (
  <div>
    <Head />
    <Header token={token} />
    {children}
    <Footer />
  </div>
);

export default Layout;
