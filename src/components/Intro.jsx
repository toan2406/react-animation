import React from 'react';
import './intro.css';

const Title = ({ style }) =>
  <h1 className="intro-title" style={style}>
    RE-LLAX
  </h1>;

const Text = ({ style, children }) =>
  <div className="intro-text" style={style} children={children} />;

export { Title, Text };
