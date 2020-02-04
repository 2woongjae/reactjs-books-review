import React from 'react';
import withAuth from '../hocs/withAuth';
import BooksContainer from '../containers/BooksContainer';
import NaviContainer from '../containers/NaviContainer';

const Home = () => (
  <div>
    <h1>Home</h1>
    <NaviContainer />
    <BooksContainer />
  </div>
);

export default withAuth(Home);
