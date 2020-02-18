import React from 'react';

import Head from './Head';
// import Header from './Header';
// import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Head />
    {/* <Header /> */}
    <div>{children}</div>
    {/* <Footer /> */}
  </div>
);

export default Layout;
