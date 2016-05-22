import React, { Component } from 'react'

export default (props) => {

  var transactions = props || []
  const { id } = props;
  transactions = transactions.transactions.filter((transaction) => {
    return transaction.accountId === id;
  })

  return(
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Type</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {transactions.map((transaction, i) => {
        return (
          <tr key={i} className={transaction.type === "deposit" ? "positive" : "negative"}>
            <td><i className="dollar icon"></i> {transaction.amount}</td>
            <td>{transaction.type}</td>
            <td>{transaction.date}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};
