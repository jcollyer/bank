import React, { Component } from 'react'

export default (props) => {
  return (
    <tr>
      <td>{props.account.accountName}</td>
      <td>{props.account.accountNumber}</td>
      <td>{"$" + props.account.amount}</td>
    </tr>
  )
}
