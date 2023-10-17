import React from 'react';
import './index.css';

const TextBox = (props) => {
  return (
    <input
      type="text"
      className={props.className + " myInput"}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default TextBox;