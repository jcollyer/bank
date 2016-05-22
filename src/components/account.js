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
        <div className="ui visible left vertical sidebar wide menu">
          <TransactionPanel accountId={account.id} transactionsPanel={transactionsPanel} />
        </div>
      );
    }
    return (
      <div className="ui grid container">
        { panel }
        <div className="row">
          <div className="column">
            <h1 className="ui header">{account.accountName}</h1>
            <p><i className="payment icon"></i>{account.accountNumber}</p>
            <button className="ui positive button" onClick={() => store.dispatch(showTransactionPanel("deposit"))}><i className="plus icon"></i>Deposit</button>
            <button className="ui negative button" onClick={() => store.dispatch(showTransactionPanel("withdraw"))}><i className="minus icon"></i>Withdraw</button>
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

export default connect(mapStateToProps)(Account);
