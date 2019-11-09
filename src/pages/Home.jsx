import React from 'react';
import withAuth from '../hocs/withAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookListContainer from '../containers/BookListContainer';

class Home extends React.Component {
  render() {
    const { token } = this.props;
    return (
      <div>
        <Header token={token} />
        <h2>Home</h2>
        <BookListContainer token={token} />
        <Footer />
      </div>
    );
  }
}

export default withAuth(Home);
