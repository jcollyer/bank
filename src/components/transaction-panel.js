import React, { Component } from 'react'
import store from '../store';
import { addTransaction, hideTransactionPanel } from '../actions/transaction-actions'
import TransactionForm from './transaction-form'

class TransactionPanel extends Component {
  handleSubmit(stateData) {
    store.dispatch(addTransaction(this.props.transactionsPanel, this.props.accountId, stateData.amount, stateData.date));
    store.dispatch(hideTransactionPanel());
  }
  render() {
    return (
      <div className="ui grid container">
        <div className="row">
          <div className="column">
            <br />
            <h2>
              <i className={this.props.transactionsPanel === "deposit" ? "plus icon" : "minus icon"}></i>
              {this.props.transactionsPanel.toUpperCase()}
            </h2>
            <TransactionForm onSubmit={this.handleSubmit.bind(this)} />
            <h4><button className="ui negative button" onClick={() => store.dispatch(hideTransactionPanel())}>
              <i className="remove circle icon"></i>
              cancel
            </button></h4>
          </div>
        </div>
      </div>
    )
  }
}

export default TransactionPanel
