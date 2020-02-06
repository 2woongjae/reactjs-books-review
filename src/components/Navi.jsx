import React from 'react';

const Navi = ({ token, logout }) => {
  function click() {
    logout(token);
  }

  return (
    <div>
      <button onClick={click}>로그 아웃</button>
    </div>
  );
};

export default Navi;
