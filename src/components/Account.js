import React, { Component } from 'react'

export default (props) => {
  return (
    <div>
      <li>{props.account.accountNumber}</li>
      <li>{props.account.accountName}</li>
      <li>{"$" + props.account.amount}</li>
    </div>
  )
}
