import React from 'react';
import Navs from '../components/Navs';
import BookAddForm from '../components/BookAddForm';

export default class Add extends React.Component {
  render() {
    const { token } = this.props;
    return (
      <div>
        <Navs token={token} />
        <h1>Add</h1>
        <BookAddForm token={token} />
      </div>
    );
  }
}
