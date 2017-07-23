import React from 'react';
import './intro.css';

const Title = ({ style }) =>
  <div className="intro-title" style={style}>
    <h1 className="animation">ANIMATION</h1>
    <h4 className="in">in</h4>
    <h1 className="react">REACT.JS</h1>
  </div>;

const Author = ({ style }) =>
  <aside className="intro-author" style={style}>
    <small>TOAN NGUYEN &nbsp; @toan2406</small>
  </aside>;

const Background = ({ style }) =>
  <div className="intro-background" style={style} />;

export { Title, Author, Background };
