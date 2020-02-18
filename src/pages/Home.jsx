import React, { useState } from 'react';
import withAuth from '../hocs/withAuth';
import BooksContainer from '../containers/BooksContainer';
import NaviContainer from '../containers/NaviContainer';
import Modal from '../components/Modal';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';

const Home = () => {
  const [visible, setVisible] = useState(false);
  function show() {
    setVisible(true);
  }
  function hide() {
    setVisible(false);
  }
  return (
    <Layout>
      <h1>Home</h1>
      <NaviContainer />
      <BooksContainer />
      <button onClick={show}>Show</button>
      {visible && (
        <Modal>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.5)',
            }}
            onClick={hide}
          >
            Hello
          </div>
        </Modal>
      )}
      <Helmet>
        <title>React School !!!!!!!!!!!!</title>
      </Helmet>
    </Layout>
  );
};

export default withAuth(Home);
