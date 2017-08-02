import React from 'react';
import './intro.css';

const Title = ({ style }) =>
  <h1 className="intro-title" style={style}>
    RE-LLAX
  </h1>;

const Author = ({ style }) =>
  <aside className="intro-author" style={style}>
    <small>@toan2406</small>
  </aside>;

const Background = ({ style }) =>
  <div className="intro-background" style={style} />;

export { Title, Author, Background };
