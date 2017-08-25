import React from 'react';
import './background.css';

const Background = ({ children, style, refFunc }) =>
  <div
    className="background"
    style={style}
    children={children}
    ref={refFunc}
  />;

export default Background;
