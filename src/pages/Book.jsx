import React from 'react';
import BookContainer from '../containers/BookContainer';
import Layout from '../components/Layout';

export default function Book({ match }) {
  return (
    <Layout>
      <BookContainer bookId={match.params.bookId} />
    </Layout>
  );
}
