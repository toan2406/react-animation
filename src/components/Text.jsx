import React from 'react';
import './text.css';

const Text = ({ style, children, refFunc }) =>
  <div className="text" style={style} children={children} ref={refFunc} />;

export default Text;
