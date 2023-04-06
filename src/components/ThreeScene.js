import React, { useRef } from 'react';

import { useFrame, extend, Canvas } from 'react-three-fiber';
import {
  SpriteMaterial,
  Points,
  SphereGeometry,
  MeshPhongMaterial,
  BufferGeometry,
  BufferAttribute,
  TextureLoader,
} from 'three';

import '../styles/App.css';
import GitHubLogo from '../assets/github-logo.png';
import LinkedInLogo from '../assets/linkedin-logo.png';

import star1 from '../assets/html.png';
import star2 from '../assets/css.png';
import star3 from '../assets/sass.png';
import star4 from '../assets/bulma.png';
import star5 from '../assets/mui.png';
import star6 from '../assets/javascript.png';
import star7 from '../assets/react.png';
import star8 from '../assets/three.png';
import star9 from '../assets/vue.png';
import star10 from '../assets/cloudinary.png';

import star11 from '../assets/express.png';
import star12 from '../assets/json.png';
import star13 from '../assets/mongodb.png';
import star14 from '../assets/mongoose.png';
import star15 from '../assets/node.png';
import star16 from '../assets/django.png';
import star17 from '../assets/python.png';
import star18 from '../assets/npm.png';
import star19 from '../assets/postgresql.png';
import star20 from '../assets/postman.png';
import star21 from '../assets/tableplus.png';

import star22 from '../assets/git.png';
import star23 from '../assets/github.png';
import star24 from '../assets/trello.png';
import star25 from '../assets/slack.png';
import star26 from '../assets/netlify.png';
import star27 from '../assets/heroku.png';

extend({ Points });

function Camera() {
  const ref = useRef();
  useFrame(() => ref.current.updateMatrixWorld());
  return (
    <perspectiveCamera
      ref={ref}
      position={[0, 0, 5]}
      fov={75}
      aspect={window.innerWidth / window.innerHeight}
      near={0.1}
      far={1000}
    />
  );
}

function StarryBackground() {
  const starRef = useRef();
  const numStars = 4000;
  const starImages = [
    star1,
    star2,
    star3,
    star4,
    star5,
    star6,
    star7,
    star8,
    star9,
    star10,
    star11,
    star12,
    star13,
    star14,
    star15,
    star16,
    star17,
    star18,
    star19,
    star20,
    star21,
    star22,
    star23,
    star24,
    star25,
    star26,
    star27,
  ];

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.0005;
    }
  });

  const starGeometry = new BufferGeometry();
  const positions = new Float32Array(numStars * 3);
  const starMaterials = [];

  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * 500 - 300;
    const y = Math.random() * 500 - 300;
    const z = Math.random() * 500 - 300;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    const randomIndex = Math.floor(Math.random() * starImages.length);
    const starMaterial = new SpriteMaterial({
      map: new TextureLoader().load(starImages[randomIndex]),
      size: 10,
      color: 0xffffff,
      transparent: true,
    });
    starMaterials.push(starMaterial);
  }

  starGeometry.setAttribute('position', new BufferAttribute(positions, 3));

  return (
    <group ref={starRef}>
      {starMaterials.map((material, i) => (
        <sprite
          key={i}
          position={[
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
          ]}
          material={material}
        />
      ))}
    </group>
  );
}

// function RedPlanet() {
//   const fadedGlowRef = useRef();

//   useFrame(() => {
//     if (fadedGlowRef.current) {
//       fadedGlowRef.current.rotation.y += 0.1;
//     }
//   });

//   const fadedGlowGeometry = new SphereGeometry(0.3, 32, 32);
//   const fadedGlowMaterial = new MeshPhongMaterial({
//     color: 0xffb2b2,
//     shininess: 50,
//     transparent: true,
//     opacity: 1,
//   });

//   const x = 3.5;
//   const y = 1;
//   const z = 0;

//   return (
//     <mesh
//       ref={fadedGlowRef}
//       geometry={fadedGlowGeometry}
//       material={fadedGlowMaterial}
//       position={[x, y, z]}
//     />
//   );
// }

// function RedPlanetGlow() {
//   const fadedGlowRef = useRef();

//   useFrame(() => {
//     if (fadedGlowRef.current) {
//       fadedGlowRef.current.rotation.y += 0.1;
//     }
//   });

//   const fadedGlowGeometry = new SphereGeometry(0.5, 32, 32);
//   const fadedGlowMaterial = new MeshPhongMaterial({
//     color: 0xffb2b2,
//     shininess: 50,
//     transparent: true,
//     opacity: 0.15,
//   });

//   const x = 3.5;
//   const y = 1;
//   const z = 0;

//   return (
//     <mesh
//       ref={fadedGlowRef}
//       geometry={fadedGlowGeometry}
//       material={fadedGlowMaterial}
//       position={[x, y, z]}
//     />
//   );
// }

// function YellowPlanet() {
//   const fadedGlowRef = useRef();

//   useFrame(() => {
//     if (fadedGlowRef.current) {
//       fadedGlowRef.current.rotation.y += 0.1;
//     }
//   });

//   const fadedGlowGeometry = new SphereGeometry(0.3, 32, 32);
//   const fadedGlowMaterial = new MeshPhongMaterial({
//     color: 0xffe599,
//     shininess: 50,
//     transparent: true,
//     opacity: 1,
//   });

//   const x = -3.5;
//   const y = -1;
//   const z = 0;

//   return (
//     <mesh
//       ref={fadedGlowRef}
//       geometry={fadedGlowGeometry}
//       material={fadedGlowMaterial}
//       position={[x, y, z]}
//     />
//   );
// }

// function YellowPlanetGlow() {
//   const fadedGlowRef = useRef();

//   useFrame(() => {
//     if (fadedGlowRef.current) {
//       fadedGlowRef.current.rotation.y += 0.1;
//     }
//   });

//   const fadedGlowGeometry = new SphereGeometry(0.5, 32, 32);
//   const fadedGlowMaterial = new MeshPhongMaterial({
//     color: 0xffe599,
//     shininess: 50,
//     transparent: true,
//     opacity: 0.15,
//   });

//   const x = -3.5;
//   const y = -1;
//   const z = 0;

//   return (
//     <mesh
//       ref={fadedGlowRef}
//       geometry={fadedGlowGeometry}
//       material={fadedGlowMaterial}
//       position={[x, y, z]}
//     />
//   );
// }

function LogoPlanet() {
  const logoPlanetRef = useRef();

  useFrame(() => {
    if (logoPlanetRef.current) {
      logoPlanetRef.current.rotation.y += 0.1;
    }
  });

  const logoPlanetGeometry = new SphereGeometry(1.08, 32, 32);
  const logoPlanetMaterial = new MeshPhongMaterial({
    color: 0x64a8d3,
    shininess: 50,
    transparent: true,
    opacity: 0.5,
  });
  return (
    <mesh
      ref={logoPlanetRef}
      geometry={logoPlanetGeometry}
      material={logoPlanetMaterial}
    />
  );
}

function Planet() {
  const planetRef = useRef();

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.1;
    }
  });

  const planetGeometry = new SphereGeometry(1.3, 32, 32);
  const planetMaterial = new MeshPhongMaterial({
    color: 0x64a8d3,
    shininess: 50,
    transparent: true,
    opacity: 0.7,
  });
  return (
    <mesh ref={planetRef} geometry={planetGeometry} material={planetMaterial} />
  );
}

function PlanetGlow() {
  const glowRef = useRef();

  useFrame(() => {
    if (glowRef.current) {
      glowRef.current.rotation.y += 0.1;
    }
  });

  const glowGeometry = new SphereGeometry(1.65, 32, 32);
  const glowMaterial = new MeshPhongMaterial({
    color: 0x64a8d3,
    shininess: 50,
    transparent: true,
    opacity: 0.3,
  });
  return <mesh ref={glowRef} geometry={glowGeometry} material={glowMaterial} />;
}

function FadedPlanetGlow() {
  const fadedGlowRef = useRef();

  useFrame(() => {
    if (fadedGlowRef.current) {
      fadedGlowRef.current.rotation.y += 0.1;
    }
  });

  const fadedGlowGeometry = new SphereGeometry(2, 32, 32);
  const fadedGlowMaterial = new MeshPhongMaterial({
    color: 0x64a8d3,
    shininess: 50,
    transparent: true,
    opacity: 0.1,
  });
  return (
    <mesh
      ref={fadedGlowRef}
      geometry={fadedGlowGeometry}
      material={fadedGlowMaterial}
    />
  );
}

function Arrow({ onClick }) {
  const arrowStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'pointer',
  };

  return (
    <div style={arrowStyle} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='30'
        height='30'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          fill='white'
          d='M12 21.35l-9.27-9.1a1.5 1.5 0 112.08-2.17L12 17.1l7.19-7.92a1.5 1.5 0 112.08 2.17L12 21.35z'
        />
      </svg>
    </div>
  );
}

const handleArrowClick = () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
};

export default function ThreeScene() {
  return (
    <>
      <Canvas className='canvas' style={{ height: '100vh' }}>
        <Camera />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 5]} />
        <StarryBackground />
        {/* <RedPlanet />
        <RedPlanetGlow />
        <YellowPlanet />
        <YellowPlanetGlow /> */}
        <LogoPlanet />
        <Planet />
        <PlanetGlow />
        <FadedPlanetGlow />
      </Canvas>
      <div
        style={{
          color: 'black',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zindex: 1,
        }}
      >
        <div className='logo-wrapper'>
          <a
            href='https://github.com/wyndhams'
            target='_blank'
            rel='noreferrer'
          >
            <img src={GitHubLogo} alt='GitHub Icon' className='logo-home' />
          </a>
          <a
            href='https://www.linkedin.com/in/wyndham-roy/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={LinkedInLogo} alt='LinkedIn Icon' className='logo-home' />
          </a>
        </div>
        <h1 id='home-title'>Wyndham Roy</h1>
        <h2 id='home-title2'>Software Engineer</h2>
      </div>
      <Arrow onClick={handleArrowClick} />
    </>
  );
}
