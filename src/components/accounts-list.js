import React, { Component } from 'react'
import { connect } from 'react-redux'
import AccountListItem from './account-list-item.js'


class AccountsList extends Component {
  render() {
    const accounts = this.props.accounts;
    return (
      <div className="ui grid container">
        <div className="row">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Account Number</th>
                <th>Account $</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, i) => {
                return <AccountListItem key={i} account={account} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    accounts: appState.accounts
  };
};

export default connect(mapStateToProps)(AccountsList);
