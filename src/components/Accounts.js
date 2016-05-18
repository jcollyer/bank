import React, { Component } from 'react'
import { connect } from 'react-redux'
import Account from './Account.js'

class Accounts extends Component {
  render() {
    const { accounts }  = this.props;
    return <Account account={accounts} />

  }
}

var mapStateToProps = function(appState){
	return {
		accounts: appState.accounts
	};
};

export default connect(mapStateToProps)(Accounts);
