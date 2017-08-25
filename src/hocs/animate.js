import React, { Component } from 'react';
import { mapObject, first, last, easingFunctions } from '../utils';

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;
const HIDDEN = { opacity: 0, pointerEvents: 'none' };
// const HIDDEN = { display: 'none' };

const animate = keyframes => BaseComponent =>
  class Animate extends Component {
    constructor(props) {
      super(props);

      this._keyframes = keyframes.map(keyframe => ({
        duration: convertDurationToPx(
          keyframe.duration,
          WINDOW_HEIGHT,
          WINDOW_WIDTH
        ),
        properties: convertPropsToPx(
          keyframe.properties,
          WINDOW_HEIGHT,
          WINDOW_WIDTH
        )
      }));
    }

    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }

    componentDidMount() {
      window.requestAnimationFrame(() =>
        draw(() => {
          const scrollTop = document.body.scrollTop;
          const newStyle = this.calculateProps(scrollTop);
          Object.assign(this.node.style, newStyle);
        })
      );
    }

    calculateProps(scrollTop) {
      const start = first(this._keyframes).duration[0];
      const end = last(this._keyframes).duration[1];
      let defaultProps = {
        transform: '',
        opacity: ''
      };

      if (scrollTop < start || scrollTop >= end) return HIDDEN;

      return this._keyframes.reduce(
        (result, keyframe) => composeProps(scrollTop, keyframe, result),
        defaultProps
      );
    }

    render() {
      return BaseComponent({
        ...this.props,
        refFunc: node => (this.node = node)
      });
    }
  };

/**
 * draw
 * @param {*} func
 */
const draw = func => {
  window.requestAnimationFrame(draw.bind(null, func));
  func();
};

/**
 * convertPercentToPx
 * @param {*} value
 * @param {*} lengthInPx
 */
const convertPercentToPx = (value, lengthInPx) => {
  if (typeof value === 'string' && value.match(/%/g)) {
    return parseFloat(value) / 100 * lengthInPx;
  }
  return value;
};

/**
 * convertDurationToPx
 * @param {*} duration
 * @param {*} height
 * @param {*} width
 */
const convertDurationToPx = (duration, height, width) =>
  duration.map(v => convertPercentToPx(v, height));

/**
 * convertPropsToPx
 * @param {*} props
 * @param {*} height
 * @param {*} width
 */
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

/**
 * calculatePercentage
 * @param {*} scrollTop
 * @param {*} start
 * @param {*} end
 */
const calculatePercentage = (scrollTop, start, end) =>
  (scrollTop - start) / (end - start);

/**
 * calculatePropValue
 * @param {*} percentage
 * @param {*} from
 * @param {*} to
 */
const calculatePropValue = (percentage, from, to) =>
  percentage * (to - from) + from;

/**
 * composeProps
 * @param {*} scrollTop
 * @param {*} keyframe
 * @param {*} props
 */
const composeProps = (scrollTop, keyframe, props) => {
  const [start, end] = keyframe.duration;

  if (scrollTop < start || scrollTop >= end) return props;

  let percentage = calculatePercentage(scrollTop, start, end);
  percentage = easingFunctions.easeInOutQuad(percentage);

  return Object.keys(keyframe.properties).reduce((result, prop) => {
    const values = keyframe.properties[prop];
    const newValue = calculatePropValue(percentage, ...values);

    switch (prop) {
      case 'translateX':
      case 'translateY':
      case 'translateZ':
        result.transform += `${prop}(${newValue}px)`;
        break;

      case 'skewX':
      case 'skewY':
      case 'rotate':
        result.transform += `${prop}(${newValue}deg)`;
        break;

      case 'scaleX':
      case 'scaleY':
        result.transform += `${prop}(${newValue})`;
        break;

      case 'letterSpacing':
        result.letterSpacing = `${newValue}px`;
        break;

      default:
        result[prop] = newValue;
    }

    return result;
  }, props);
};

const Container = ({ style, ...other }) =>
  <div {...other} style={{ ...style, contain: 'strict' }} />;

export { animate, Container };
