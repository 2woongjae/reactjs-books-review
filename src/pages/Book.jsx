import React from 'react';
import withAuth from '../hocs/withAuth';
import BookDetailContainer from '../containers/BookDetailContainer';
import Layout from '../components/Layout';

const Book = ({ token, match }) => {
  const { id } = match.params;
  return (
    <Layout token={token}>
      <BookDetailContainer token={token} id={Number(id)} />
    </Layout>
  );
};

export default withAuth(Book);
