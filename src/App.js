import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import withAuth from "./hocs/withAuth";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/create";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={withAuth(Home)} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
