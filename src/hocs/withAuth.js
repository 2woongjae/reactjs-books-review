import React from 'react';

export default function withAuth(Component) {
  const NewComponent = props => {
    const token = localStorage.getItem('token');

    if (token === null) {
      props.history.push('/signin');
    }

    return <Component {...props} token={token} />;
  };

  NewComponent.displayName = `withAuth(${Component.displayName})`;

  return NewComponent;
}
