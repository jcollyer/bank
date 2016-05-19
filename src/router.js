import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import Wrapper from './components/Wrapper'
import Accounts from './components/Accounts'


export default (
  <Router history={hashHistory}>
    <Route path="/" component={Wrapper} >
       <IndexRoute component={Accounts} />

    </Route>
  </Router>
);
