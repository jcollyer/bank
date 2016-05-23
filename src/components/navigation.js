import React from 'react'
import { Link } from 'react-router'

export default () => {
  return (
    <nav className="ui menu">
      <Link to="/" className="brand item">Bank Accounts</Link>
    </nav>
  )
}
