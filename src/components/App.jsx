import React, { Component } from 'react';
import { Title } from './Intro.jsx';
import { Cube, Background } from './Cube.jsx';
import { animate } from '../hocs/animate';

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <AnimatedTitle1 style={{ color: 'rgba(255, 0, 0, .75)' }} />
          <AnimatedTitle2 style={{ color: 'rgba(0, 0, 255, .75)' }} />
        </section>

        <section>
          <AnimatedBackground2 style={{ background: 'black' }}>
            <AnimatedCube2 type="skeleton" />
          </AnimatedBackground2>
          <AnimatedBackground1 style={{ background: 'white' }}>
            <AnimatedCube1 type="solid" />
          </AnimatedBackground1>
        </section>
      </main>
    );
  }
}

const AnimatedTitle1 = animate([
  {
    duration: [0, '100%'],
    properties: {
      letterSpacing: [5, 70],
      opacity: [1, 0]
    }
  }
])(Title);

const AnimatedTitle2 = animate([
  {
    duration: [0, '100%'],
    properties: {
      letterSpacing: [8, 80],
      opacity: [1, 0]
    }
  }
])(Title);

const AnimatedBackground1 = animate([
  {
    duration: ['50%', '100%'],
    properties: {}
  },
  {
    duration: ['100%', '200%'],
    properties: {
      skewY: [0, -20],
      translateY: [0, '-100%']
    }
  }
])(Background);

const AnimatedCube1 = animate([
  {
    duration: ['50%', '100%'],
    properties: {
      translateY: ['100%', 0]
    }
  },
  {
    duration: ['100%', '200%'],
    properties: {
      skewY: [0, 20],
      translateY: [0, '100%']
    }
  }
])(Cube);

const AnimatedBackground2 = animate([
  {
    duration: ['50%', '200%'],
    properties: {}
  }
])(Background);

const AnimatedCube2 = animate([
  {
    duration: ['50%', '200%'],
    properties: {}
  }
])(Cube);

export default App;
