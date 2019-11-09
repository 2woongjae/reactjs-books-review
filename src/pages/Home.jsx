import React from 'react';
import withAuth from '../hocs/withAuth';
import BookListContainer from '../containers/BookListContainer';
import Layout from '../components/Layout';

const Home = ({ token }) => (
  <Layout token={token}>
    <BookListContainer token={token} />
  </Layout>
);

export default withAuth(Home);
