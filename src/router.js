import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Wrapper from './components/wrapper'
import AccountsList from './components/accounts-list'
import Account from './components/account'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Wrapper} >
      <Route path="accounts" component={AccountsList} >
      </Route>
      <Route path="/accounts/:accountId" component={Account} />
    </Route>
  </Router>
);
