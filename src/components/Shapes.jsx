import React from 'react';
import './shapes.css';

const Circle = ({ style, color, refFunc }) =>
  <svg className="shape" viewBox="0 0 100 100" style={style} ref={refFunc}>
    <circle cx="50" cy="50" r="50" fill={color} />
  </svg>;

const Square = ({ style, color, refFunc }) =>
  <svg className="shape" viewBox="0 0 100 100" style={style} ref={refFunc}>
    <rect width="100" height="100" fill={color} />
  </svg>;

const Triangle = ({ style, color, refFunc }) =>
  <svg className="shape" viewBox="0 0 100 100" style={style} ref={refFunc}>
    <polygon points="50,0 0,100 100,100" fill={color} />
  </svg>;

const Container = ({ children }) =>
  <div className="shapes-container" children={children} />;

export { Circle, Triangle, Square, Container };
