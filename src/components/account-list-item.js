import React, { Component } from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <tr>
      <td><Link to={`/accounts/${props.account.id}`}>{props.account.accountName}</Link></td>
      <td>{props.account.accountNumber}</td>
      <td>{"$" + props.account.amount}</td>
    </tr>
  )
}
