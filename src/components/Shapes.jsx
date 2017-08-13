import React from 'react';
import './shapes.css';

const Circle = ({ style, color }) =>
  <svg className="shape" viewBox="0 0 100 100" style={style}>
    <circle cx="50" cy="50" r="50" fill={color} />
  </svg>;

const Square = ({ style, color }) =>
  <svg className="shape" viewBox="0 0 100 100" style={style}>
    <rect width="100" height="100" fill={color} />
  </svg>;

const Triangle = ({ style, color }) =>
  <svg className="shape" viewBox="0 0 100 100" style={style}>
    <polygon points="50,0 0,100 100,100" fill={color} />
  </svg>;

const Container = ({ children }) =>
  <div className="shapes-container" children={children} />;

export { Circle, Triangle, Square, Container };
