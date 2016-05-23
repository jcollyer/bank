import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/app'
import AccountsList from './components/accounts-list'
import Account from './components/account'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={AccountsList} />
      <Route path="/accounts/:accountId" component={Account} />
    </Route>
  </Router>
)
