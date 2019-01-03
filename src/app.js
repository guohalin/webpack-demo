import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import AccountManager from 'pages/accountManager/view';

const App = ({ history }) => (
  <Router history={history}>
      <Switch>
        <Redirect path="/" exact to="/accountManager" />
        <Route path="/accountManager" component={AccountManager} />
      </Switch>
  </Router>
)
export default App;
