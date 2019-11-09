import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Error from './pages/Error';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path="/signin"
          exact
          component={props => {
            const token = localStorage.getItem('token');
            if (token !== null) {
              return <Redirect to="/" />;
            }
            return <Signin {...props} />;
          }}
        />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Home} />
        <Route component={Error} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
