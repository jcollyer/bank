import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Accounts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value } = this.props
    return (
      <p>
        Account: {value} 
      </p>
    )
  }
}

var mapStateToProps = function(appState){
	return {
		value: appState
	};
};

export default connect(mapStateToProps)(Accounts);
