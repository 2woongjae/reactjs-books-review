import React from 'react';
import withAuth from '../hocs/withAuth';
import BookEditContainer from '../containers/BookEditContainer';
import Layout from '../components/Layout';

const Edit = ({ token, match }) => {
  const { id } = match.params;
  return (
    <Layout token={token}>
      <BookEditContainer token={token} id={Number(id)} />
    </Layout>
  );
};

export default withAuth(Edit);
