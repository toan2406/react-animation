import React, { Component } from 'react';
import { Title, Author, Background as IntroBackground } from './Intro.jsx';
import {
  ColorCube,
  SkeletonCube,
  Background as CubeBackground
} from './Cube.jsx';
import { animate, Container } from '../hocs/animate';

const AnimatedIntroBackground = animate([
  {
    duration: [0, '100%'],
    properties: {
      opacity: [1, 0]
    }
  }
])(IntroBackground);

const AnimatedTitle = animate([
  {
    duration: [0, '100%'],
    properties: {
      letterSpacing: [10, 72],
      opacity: [1, 0]
    }
  }
])(Title);

const AnimatedCubeBackground = animate([
  {
    duration: [0, '100%'],
    properties: {}
  },
  {
    duration: ['100%', '200%'],
    properties: {
      skewY: [0, -20],
      translateY: [0, '-140%']
    }
  }
])(CubeBackground);

const AnimatedCube = animate([
  {
    duration: [0, '100%'],
    properties: {
      translateY: ['25%', 0],
      scaleX: [0.7, 1],
      scaleY: [0.7, 1]
    }
  },
  {
    duration: ['100%', '200%'],
    properties: {
      skewY: [0, 20],
      translateY: [0, '140%']
    }
  }
])(ColorCube);

const AnimatedCubeBackground1 = animate([
  {
    duration: [0, '200%'],
    properties: {}
  }
])(CubeBackground);

const AnimatedCube1 = animate([
  {
    duration: [0, '200%'],
    properties: {}
  }
])(SkeletonCube);

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <Container
            style={{
              position: 'fixed',
              top: '30%',
              left: '50%',
              width: 1000,
              height: 75,
              marginLeft: -500,
              textAlign: 'center',
              zIndex: 10
            }}
          >
            <AnimatedTitle />
          </Container>
        </section>
        <section>
          <AnimatedCubeBackground1 style={{ background: '#373d29' }}>
            <AnimatedCube1 />
          </AnimatedCubeBackground1>
          <AnimatedCubeBackground>
            <AnimatedCube />
          </AnimatedCubeBackground>
        </section>
      </main>
    );
  }
}

export default App;
