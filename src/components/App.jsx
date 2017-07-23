import React, { Component } from 'react';
import { Title, Author, Background as IntroBackground } from './Intro.jsx';
import {
  ColorCube,
  SkeletonCube,
  Background as CubeBackground
} from './Cube.jsx';
import animate from '../hocs/animate';

const AnimatedIntroBackground = animate({
  duration: [0, '100%'],
  properties: {
    opacity: [1, 0]
  }
})(IntroBackground);

const AnimatedTitle = animate({
  duration: [0, '80%'],
  properties: {
    opacity: [1, 0],
    translateY: [0, '-50%']
  }
})(Title);

const AnimatedCubeBackground = animate({
  duration: ['100%', '200%'],
  properties: {
    skewY: [0, -40],
    translateY: [0, '-100%']
  }
})(CubeBackground);

const AnimatedCube = animate({
  duration: ['100%', '200%'],
  properties: {
    skewY: [0, 40],
    translateY: [0, '100%']
  }
})(ColorCube);

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <AnimatedIntroBackground />
          <AnimatedTitle />
          {/* <Author /> */}
        </section>
        <section>
          {/* <CubeBackground style={{ background: '#373d29' }}>
            <SkeletonCube />
          </CubeBackground> */}
          <AnimatedCubeBackground style={{ background: '#373d29' }}>
            <AnimatedCube />
          </AnimatedCubeBackground>
        </section>
      </main>
    );
  }
}

export default App;

// import Title from './Title';
// import Background from './Background';
// import Cube from './Cube';

// const AnimatedBackground = animate({
//   duration: [0, '100%'],
//   properties: {
//     skewY: [0, -40],
//     translateY: [0, '-100%']
//   }
// })(Background);

// const AnimatedTitle = animate({
//   duration: [0, '100%'],
//   properties: {
//     skewY: [0, 40],
//     translateY: [0, '100%']
//   }
// })(Title);

/*
<AnimatedBackground
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',

            transformOrigin: 'bottom left',
            overflow: 'hidden'
          }}
        >
          <AnimatedCube cubeClass="cube grey" />
        </AnimatedBackground>
        <Cube cubeClass="cube" style={{zIndex: -1}} />
         <Title style={{ color: '#EEE', zIndex: -1 }} />
         <AnimatedBackground
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            background: '#FDEF52',
            transformOrigin: 'bottom left',
            overflow: 'hidden'
          }}
        >
          <AnimatedTitle />
        </AnimatedBackground>
        <Title style={{ color: '#EEE', zIndex: -1 }} />
        */
