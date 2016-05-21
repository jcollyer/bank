import React, { Component } from 'react'
import { connect } from 'react-redux'
import AccountListItem from './account-list-item.js'


class AccountsList extends Component {
  render() {
    const accounts = this.props.accounts;
    return (
      <table>
        <thead>
          <tr>
            <td>Account Name</td>
            <td>Account Number</td>
            <td>Account $</td>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, i) => {
            return <AccountListItem key={i} account={account} />;
          })}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    accounts: appState.accounts
  };
};

export default connect(mapStateToProps)(AccountsList);
