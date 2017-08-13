import React from 'react';
import './cube.css';

const Cube = ({ type, style }) =>
  <div className="cube-wrapper" style={style}>
    <div className={`cube ${type}`}>
      <div className="center side front" />
      <div className="center side back" />
      <div className="center side top" />
      <div className="center side bottom" />
      <div className="center side left" />
      <div className="center side right" />

      <div className="side front" />
      <div className="side back" />
      <div className="side top" />
      <div className="side bottom" />
      <div className="side left" />
      <div className="side right" />
    </div>
  </div>;

export { Cube };
