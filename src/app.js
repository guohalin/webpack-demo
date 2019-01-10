import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import AccountManager from 'pages/accountManager/view';
import Ts from 'pages/ts/view/index.tsx';

const App = ({ history }) => (
  <Router history={history}>
      <Switch>
        <Redirect path="/" exact to="/accountManager" />
        <Route path="/accountManager" component={AccountManager} />
        <Route path="/ts" component={Ts} />
      </Switch>
  </Router>
)
export default App;
