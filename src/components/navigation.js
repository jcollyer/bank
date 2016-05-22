import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="ui menu">
      <Link to="/" className="brand item">Bank Account</Link>
    </div>
  );
};
