import React, { Component } from 'react'
import { connect } from 'react-redux'
import Account from './Account.js'


class Accounts extends Component {
  render() {
    const { accounts } = this.props.accounts;
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
            return <Account key={i} account={account} />;
          })}
        </tbody>
      </table>
    )
  }
}

var mapStateToProps = function(appState){
	return {
		accounts: appState.accounts
	};
};

export default connect(mapStateToProps)(Accounts);
