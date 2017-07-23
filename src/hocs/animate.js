import React, { Component } from 'react';
import { mapObject } from '../utils';

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

const animate = keyframe => BaseComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      this._duration = convertDurationToPx(keyframe.duration, WINDOW_HEIGHT);
      this._properties = convertPropsToPx(
        keyframe.properties,
        WINDOW_HEIGHT,
        WINDOW_WIDTH
      );

      this.state = {
        scrollTop: document.body.scrollTop
      };
    }

    shouldComponentUpdate = (nextProps, nextState) =>
      nextState.scrollTop !== this.state.scrollTop;

    componentDidMount() {
      window.requestAnimationFrame(() =>
        draw(() => {
          this.setState({
            scrollTop: document.body.scrollTop
          });
        })
      );
    }

    calculateProps = () => {
      const scrollTop = this.state.scrollTop;
      const [start, end] = this._duration;

      if (scrollTop < start || scrollTop > end) {
        return { display: 'none' };
      }

      const percentage = (scrollTop - start) / (end - start);

      return Object.keys(this._properties).reduce(
        (r, k) => {
          const vals = this._properties[k];
          const newVal = percentage * (vals[1] - vals[0]) + vals[0];
          switch (k) {
            case 'translateX':
            case 'translateY':
              r.transform += `${k}(${newVal}px)`;
              break;
            case 'skewX':
            case 'skewY':
            case 'rotate':
              r.transform += `${k}(${newVal}deg)`;
              break;
            case 'opacity':
              r.opacity = newVal;
          }
          return r;
        },
        {
          transform: '',
          opacity: ''
        }
      );
    };

    render() {
      const { style, ...other } = this.props;
      return (
        <BaseComponent
          {...other}
          style={{
            ...style,
            ...this.calculateProps()
          }}
        />
      );
    }
  };

const draw = func => {
  window.requestAnimationFrame(draw.bind(null, func));
  func();
};

const convertPercentToPx = (value, lengthInPx) => {
  if (typeof value === 'string' && value.match(/%/g)) {
    return parseFloat(value) / 100 * lengthInPx;
  }
  return value;
};

const convertDurationToPx = (duration, height) =>
  duration.map(v => convertPercentToPx(v, height));

const convertPropsToPx = (props, height, width) =>
  mapObject(props, (vals, prop) => {
    switch (prop) {
      case 'translateX':
        return vals.map(v => convertPercentToPx(v, width));
      case 'translateY':
        return vals.map(v => convertPercentToPx(v, height));
      default:
        return vals;
    }
  });

export default animate;
