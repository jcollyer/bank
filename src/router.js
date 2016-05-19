import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Wrapper from './components/wrapper'
import AccountsList from './components/accounts-list'
import AccountListItem from './components/account-list-item'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Wrapper} >
      <Route path="accounts" component={AccountsList}>
        <Route path="/accounts/:accountId" component={AccountListItem}/>
      </Route>
    </Route>
  </Router>
);
