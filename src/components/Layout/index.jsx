import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ token, children }) => (
  <div>
    <Head />
    <Header token={token} />
    <div
      style={{
        marginLeft: 40,
        marginRight: 40,
        marginTop: 30,
        marginBottom: 50,
      }}
    >
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
