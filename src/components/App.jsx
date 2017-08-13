import React, { Component } from 'react';
import { Title, Text } from './Intro.jsx';
import { Cube, Background } from './Cube.jsx';
import {
  Circle,
  Triangle,
  Square,
  Container as ShapesContainer
} from './Shapes.jsx';
import { animate } from '../hocs/animate';

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <AnimatedTitle1 style={{ color: 'rgba(255, 0, 255, .9)' }} />
          <AnimatedTitle2 style={{ color: 'rgba(0, 255, 255, .9)' }} />
          <AnimatedText1 style={{ bottom: 10, width: '100%', zIndex: 1 }}>
            Explore<br />↓
          </AnimatedText1>
        </section>

        <section>
          <AnimatedBackground2 style={{ background: 'lightcyan' }}>
            <AnimatedCube2 type="skeleton" />
          </AnimatedBackground2>
          <AnimatedBackground1 style={{ background: 'ghostwhite' }}>
            <AnimatedCube1 type="solid" />
          </AnimatedBackground1>
        </section>

        <section>
          <ShapesContainer>
            <AnimatedCircle1 color="fuchsia" />
            <AnimatedSquare1 color="blue" />
            <AnimatedTriangle1 color="aqua" />
            <AnimatedSquare2 color="aqua" />
            <AnimatedTriangle2 color="magenta" />
            <AnimatedCircle2 color="navy" />
            <AnimatedSquare3 color="fuchsia" />
            <AnimatedCircle3 color="cyan" />
            <AnimatedTriangle3 color="blue" />
          </ShapesContainer>
        </section>
      </main>
    );
  }
}

// =====================================================================
// INTRO
// =====================================================================

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

// =====================================================================
// CUBE
// =====================================================================

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
    duration: ['100%', '335%'],
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

// =====================================================================
// SHAPES
// =====================================================================

const AnimatedCircle1 = animate([
  {
    duration: ['230%', '250%'],
    properties: {
      translateZ: [-200, 0],
      opacity: [0, 1]
    }
  },
  {
    duration: ['250%', '300%'],
    properties: {}
  },
  {
    duration: ['300%', '320%'],
    properties: {
      translateZ: [0, 200],
      opacity: [1, 0]
    }
  }
])(Circle);

const AnimatedSquare1 = animate([
  {
    duration: ['235%', '255%'],
    properties: {
      translateZ: [-200, 0],
      opacity: [0, 1]
    }
  },
  {
    duration: ['255%', '300%'],
    properties: {}
  },
  {
    duration: ['302.5%', '322.5%'],
    properties: {
      translateZ: [0, 200],
      opacity: [1, 0]
    }
  }
])(Square);

const AnimatedTriangle1 = animate([
  {
    duration: ['240%', '260%'],
    properties: {
      translateZ: [-200, 0],
      opacity: [0, 1]
    }
  },
  {
    duration: ['260%', '300%'],
    properties: {}
  },
  {
    duration: ['305%', '325%'],
    properties: {
      translateZ: [0, 200],
      opacity: [1, 0]
    }
  }
])(Triangle);

const AnimatedSquare2 = animate([
  {
    duration: ['245%', '265%'],
    properties: {
      translateZ: [-200, 0],
      opacity: [0, 1]
    }
  },
  {
    duration: ['265%', '300%'],
    properties: {}
  },
  {
    duration: ['312.5%', '332.5%'],
    properties: {
      translateZ: [0, 200],
      opacity: [1, 0]
    }
  }
])(Square);

const AnimatedTriangle2 = animate([
  {
    duration: ['250%', '270%'],
    properties: {
      translateZ: [-200, 0],
      opacity: [0, 1]
    }
  },
  {
    duration: ['270%', '300%'],
    properties: {}
  },
  {
    duration: ['315%', '335%'],
    properties: {
      translateZ: [0, 200],
      opacity: [1, 0]
    }
  }
])(Triangle);

const AnimatedCircle2 = animate([
  {
    duration: ['255%', '275%'],
    properties: {
      translateZ: [-200, 0],
      opacity: [0, 1]
    }
  },
  {
    duration: ['275%', '300%'],
    properties: {}
  },
  {
    duration: ['310%', '330%'],
    properties: {
      translateZ: [0, 200],
      opacity: [1, 0]
    }
  }
])(Circle);

const AnimatedSquare3 = animate([
  {
    duration: ['260%', '280%'],
    properties: {
      translateZ: [-200, 0],
      opacity: [0, 1]
    }
  },
  {
    duration: ['280%', '300%'],
    properties: {}
  },
  {
    duration: ['307.5%', '327.5%'],
    properties: {
      translateZ: [0, 200],
      opacity: [1, 0]
    }
  }
])(Square);

const AnimatedCircle3 = animate([
  {
    duration: ['265%', '285%'],
    properties: {
      translateZ: [-200, 0],
      opacity: [0, 1]
    }
  },
  {
    duration: ['285%', '300%'],
    properties: {}
  },
  {
    duration: ['305%', '325%'],
    properties: {
      translateZ: [0, 200],
      opacity: [1, 0]
    }
  }
])(Circle);

const AnimatedTriangle3 = animate([
  {
    duration: ['270%', '290%'],
    properties: {
      translateZ: [-200, 0],
      opacity: [0, 1]
    }
  },
  {
    duration: ['290%', '300%'],
    properties: {}
  },
  {
    duration: ['310%', '330%'],
    properties: {
      translateZ: [0, 200],
      opacity: [1, 0]
    }
  }
])(Triangle);

export default App;
