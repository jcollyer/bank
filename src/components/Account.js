import React, { Component } from 'react'

export default (props) => {
  
  return (
    <div>
      <li>{props.account.accounts[0].accountNumber}</li>
      <li>{props.account.accounts[0].accountName}</li>
      <li>{"$" + props.account.accounts[0].amount}</li>
    </div>
  )
}
