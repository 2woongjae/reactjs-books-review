import React from 'react';
import Navs from '../components/Navs';
import BooksContainer from '../containers/BooksContainer';

class Home extends React.Component {
  render() {
    const { token } = this.props;
    return (
      <div>
        <Navs token={token} />
        <h1>Home</h1>
        <BooksContainer token={token} />
      </div>
    );
  }
}

export default Home;
