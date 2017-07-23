import React from 'react';
import './cube.css';

const Cube = ({ style, className = 'cube' }) =>
  <div className="cube-wrapper" style={style}>
    <div className={className}>
      <div className="center" />
      <div className="side front" />
      <div className="side back" />
      <div className="side top" />
      <div className="side bottom" />
      <div className="side left" />
      <div className="side right" />
    </div>
  </div>;

const ColorCube = ({ style }) => <Cube className="cube color" style={style} />;

const SkeletonCube = ({ style }) =>
  <Cube className="cube skeleton" style={style} />;

const Background = ({ children, style }) =>
  <div className="cube-background" children={children} style={style} />;

export { Cube, ColorCube, SkeletonCube, Background };
