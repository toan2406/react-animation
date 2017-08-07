import React, { Component } from 'react';
import { Title, Text } from './Intro.jsx';
import { Cube, Background } from './Cube.jsx';
import { Circle, Triangle, Rectangle, Hexagon } from './Shapes.jsx';
import { animate } from '../hocs/animate';

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <AnimatedTitle1 style={{ color: 'rgba(255, 0, 255, .75)' }} />
          <AnimatedTitle2 style={{ color: 'rgba(0, 255, 255, .75)' }} />
          <AnimatedText1 style={{ bottom: 10, width: '100%', zIndex: 10 }}>
            Explore<br />↓
          </AnimatedText1>
        </section>

        <section>
          <AnimatedBackground2 style={{ background: 'lightcyan' }}>
            <AnimatedCube2 type="skeleton" />
          </AnimatedBackground2>
          <AnimatedText2 style={{ bottom: '20%', width: '100%' }}>
            Dogs are better than cats
          </AnimatedText2>
          <AnimatedBackground1 style={{ background: 'ghostwhite' }}>
            <AnimatedCube1 type="solid" />
          </AnimatedBackground1>
        </section>
      </main>
    );
  }
}

const AnimatedText1 = animate([
  {
    duration: [0, '100%'],
    properties: {
      opacity: [1, 0]
    }
  }
])(Text);

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
      translateY: [0, '90%']
    }
  }
])(Cube);

const AnimatedBackground2 = animate([
  {
    duration: ['100%', '250%'],
    properties: {}
  }
])(Background);

const AnimatedCube2 = animate([
  {
    duration: ['100%', '200%'],
    properties: {
      translateY: [0, '-10%']
    }
  },
  {
    duration: ['200%', '250%'],
    properties: {
      translateY: ['-10%', '-100%']
    }
  }
])(Cube);

const AnimatedText2 = animate([
  {
    duration: ['100%', '210%'],
    properties: {
      translateY: [0, '-10%']
    }
  },
  {
    duration: ['210%', '250%'],
    properties: {
      translateY: ['-10%', '-100%']
    }
  }
])(Text);

export default App;
