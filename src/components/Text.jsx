import React from 'react';
import './text.css';

const Text = ({ style, children }) =>
  <div className="text" style={style} children={children} />;

export default Text;
