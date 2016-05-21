import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import store from '../store';
import { addTransaction } from '../actions/transaction-actions'

class TransactionForm extends Component {
  render() {
    const { fields: { amount }, hideModal, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>Amount</label>
        <input type="text" placeholder="Amount" {...amount} />

        <div onClick={hideModal}>Cancel</div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

TransactionForm = reduxForm({
  form: 'transaction',
  fields: ['amount']
})(TransactionForm);

export default TransactionForm;
