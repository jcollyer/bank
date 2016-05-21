import React, { Component } from 'react'
import { reduxForm } from 'redux-form';

class TransactionForm extends Component {
  render() {
    const { fields: { amount }, handleSubmit, hideModal } = this.props;

    return (
      <form>
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
