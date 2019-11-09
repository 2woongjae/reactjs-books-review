import React from 'react';
import Header from '../components/Header';
import withAuth from '../hocs/withAuth';

function Profile({ token }) {
  return (
    <div>
      <Header token={token} />
      <h2>Profile</h2>
    </div>
  );
}

export default withAuth(Profile);
