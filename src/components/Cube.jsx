import React from 'react';
import './cube.css';

const Cube = ({ type, style }) =>
  <div className="cube-wrapper" style={style}>
    <div className={`cube ${type}`}>
      <div className="center" />
      <div className="side front" />
      <div className="side back" />
      <div className="side top" />
      <div className="side bottom" />
      <div className="side left" />
      <div className="side right" />
    </div>
  </div>;

const Background = ({ children, style }) =>
  <div className="cube-background" style={style} children={children} />;

export { Cube, Background };
