import React from 'react'
import Navigation from './navigation.js'

export default function Wrapper({ children }) {
  return (
    <div id="wrapper">
      <Navigation />
      {children}
    </div>
  );
};
