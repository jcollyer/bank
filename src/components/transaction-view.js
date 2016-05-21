import React, { Component } from 'react'

export default (props) => {

  var transactions = props || []
  const { id } = props;
  transactions = transactions.transactions.filter((transaction) => {
    return transaction.accountId === id;
  })

  return(
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {transactions.map((transaction, i) => {
        return (
          <tr key={i}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};
