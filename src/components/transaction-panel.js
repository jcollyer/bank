import React, { Component } from 'react'
import store from '../store';
import { addTransaction, hideTransactionPanel } from '../actions/transaction-actions'
import TransactionForm from './transaction-form'

class TransactionPanel extends Component {
  handleSubmit(data) {
    store.dispatch(addTransaction(this.props.transactionsPanel, this.props.accountId, data.amount));
    store.dispatch(hideTransactionPanel());
  }
  render() {
    return (
      <div>
        <h4>Transaction Panel</h4>
        <TransactionForm onSubmit={this.handleSubmit.bind(this)} />
        <button onClick={() => store.dispatch(hideTransactionPanel())}>close</button>
      </div>
    )
  }
}

export default TransactionPanel
