import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store';
import { showTransactionPanel } from '../actions/transaction-actions'
import TransactionPanel from './transaction-panel'
import TransactionView from './transaction-view'
import { addTransaction } from '../actions/transaction-actions'


class Account extends Component {
  render() {
    var panel;
    const { account, transactionsPanel, transactions, params } = this.props;

    if (transactionsPanel.length > 0) {
      panel = (
        <TransactionPanel accountId={account.id} transactionsPanel={transactionsPanel} />
      );
    }
    return (
      <div>
        { panel }
        <button onClick={() => store.dispatch(showTransactionPanel("deposit")) }>Deposit $$</button>
        <button onClick={() => store.dispatch(showTransactionPanel("withdraw"))}>Withdraw $$</button>
        <li>{account.accountName}</li>
        <li>{account.amount}</li>

        <TransactionView transactions={transactions} id={account.id} />
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

export default connect(mapStateToProps)(Account);
