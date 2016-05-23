import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { showTransactionPanel } from '../actions/transaction-actions'
import TransactionPanel from './transaction-panel'
import TransactionView from './transaction-view'
import { addTransaction } from '../actions/transaction-actions'


class Account extends Component {
  showTransactionPanel(transactionType) {
    store.dispatch(showTransactionPanel(transactionType))
  }
  render() {
    var panel
    const { account, transactionsPanel, transactions, params } = this.props
    panel = (
      <div id="transactions-panel" className={transactionsPanel.length > 0 ? "ui left vertical visible sidebar wide menu" : "ui left vertical sidebar wide menu"}>
        <TransactionPanel accountId={account.id} transactionsPanel={transactionsPanel} />
      </div>
    )
    return (
      <div className="ui grid container">
        { panel }
        <div className="row">
          <div className="column">
            <h1 className="ui header">{account.accountName}</h1>
            <p><i className="payment icon"></i>{account.accountNumber}</p>
            <button className="ui positive button" onClick={this.showTransactionPanel.bind(null, "deposit")}>
              <i className="plus icon"></i>
              Deposit
            </button>
            <button className="ui negative button" onClick={this.showTransactionPanel.bind(null, "withdraw")}>
              <i className="minus icon"></i>
              Withdraw
            </button>
          </div>
        </div>


        <div className="row">
          <div className="center aligned starter column">
            <TransactionView transactions={transactions} id={account.id} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    account: appState.accounts[window.location.hash.split("/")[2].substring(0,1)],
    transactionsPanel: appState.transactionsPanel,
    transactions: appState.transactions
  }
}

export default connect(mapStateToProps)(Account)
