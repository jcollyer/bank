import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import store from '../store'
import { addTransaction } from '../actions/transaction-actions'

class TransactionForm extends Component {
  render() {
    const { fields: { amount }, hideModal, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className="ui action left icon input">
          <i className="dollar icon"></i>
          <input type="text" placeholder="Amount" {...amount} />
          <button className="ui blue button" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

TransactionForm = reduxForm({
  form: 'transaction',
  fields: ['amount']
})(TransactionForm)

export default TransactionForm
