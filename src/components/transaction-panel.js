import React, { Component } from 'react'
import store from '../store';
import { hideTransactionPanel } from '../actions/transaction-actions'
import TransactionForm from './transaction-form'

class TransactionPanel extends Component {
  render() {
    return (
      <div>
        <h4>Transaction Panel</h4>
        <TransactionForm />
        <button onClick={() => store.dispatch(hideTransactionPanel())}>close</button>
      </div>
    )
  }
}

export default TransactionPanel
