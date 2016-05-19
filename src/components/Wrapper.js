import React from 'react';

export default function Wrapper({ children }) {
  return (
    <div id="wrapper">
      <h3>wrapper</h3>
      {children}
    </div>
  );
};
