import React from 'react';
import './intro.css';

const Title = ({ style, refFunc }) =>
  <h1 className="intro-title" style={style} ref={refFunc}>
    RE-LLAX
  </h1>;

export { Title };
