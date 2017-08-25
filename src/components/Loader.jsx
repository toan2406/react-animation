import React from 'react';
import { getWindowWidth, getWindowHeight } from '../utils';
import './loader.css';

const getLoaderLength = () => {
  const windowWidth = getWindowWidth();
  const windowHeight = getWindowHeight();
  return (windowWidth + windowHeight) * 2;
};

const loaderLength = getLoaderLength();

const Loader = ({ style, refFunc }) =>
  <div className="loader-wrapper">
    <svg width="100%" height="100%">
      <rect
        className="loader"
        strokeDasharray={loaderLength}
        style={style}
        ref={refFunc}
      />
    </svg>
  </div>;

export { Loader, getLoaderLength };
