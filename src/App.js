import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Error from './pages/Error';
import withAuth from './utils/withAuth';
import Add from './pages/Add';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/add" exact component={withAuth(Add)} />
        <Route path="/" exact component={withAuth(Home)} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
