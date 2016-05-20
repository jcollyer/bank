import React, { Component } from 'react'
import { connect } from 'react-redux'


class Account extends Component {
  render() {
    // debugger;
    const account = this.props.account;
    return (
      <div>
        <li>{account.accountName}</li>
        <li>{account.amount}</li>
      </div>
    )
  }
}

var mapStateToProps = function(appState){
	return {
		account: appState.accounts.accounts[window.location.hash.split("/")[2].substring(0,1)]
	};
};

export default connect(mapStateToProps)(Account);
