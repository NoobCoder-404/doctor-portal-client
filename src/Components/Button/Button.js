/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';
const Button = ({ children }) => {
  return (
    <div>
      <button className="btn button-design ">{children}</button>
    </div>
  );
};

export default Button;
