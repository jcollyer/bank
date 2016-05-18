import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Accounts from './components/Accounts'
import rootReducer from './reducers'

const store = createStore(rootReducer)


render(
  <Provider store={store}>
    <Accounts />
  </Provider>,
  document.getElementById('app')
);
