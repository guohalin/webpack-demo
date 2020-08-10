/*
 * @Date: 2019-01-02 16:01:45
 * @FilePath: \webpack-demo\src\app.js
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */
import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import AccountManager from 'pages/accountManager/view';
import Ts from 'pages/ts/view/index.tsx';
import Chat from 'pages/chat/view/index.tsx';
import Count from 'pages/count/view/index.tsx';

const App = ({ history }) => (
  <Router history={history}>
      <Switch>
        <Redirect path="/" exact to="/accountManager" />
        <Route path="/accountManager" component={AccountManager} />
        <Route path="/ts" component={Ts} />
        <Route path="/chat" component={Chat} />
        <Route path="/count" component={Count} />
      </Switch>
  </Router>
)
export default App;
