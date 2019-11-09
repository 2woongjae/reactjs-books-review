import React from 'react';
import withAuth from '../hocs/withAuth';
import BookAddContainer from '../containers/BookAddContainer';
import Layout from '../components/Layout';

const Add = ({ token }) => (
  <Layout token={token}>
    <BookAddContainer token={token} />
  </Layout>
);

export default withAuth(Add);
