import React from 'react';
import './background.css';

const Background = ({ children, style }) =>
  <div className="background" style={style} children={children} />;

export default Background;
