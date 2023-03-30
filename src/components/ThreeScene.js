import React, { useRef } from 'react';

import { useFrame, extend, Canvas } from 'react-three-fiber';
import {
  PointsMaterial,
  Points,
  SphereGeometry,
  MeshPhongMaterial,
  BufferGeometry,
  BufferAttribute,
} from 'three';

import '../styles/App.css';
import GitHubLogo from '../assets/github-logo.png';
import LinkedInLogo from '../assets/linkedin-logo.png';

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
  const numStars = 10000;

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.0005;
    }
  });

  const starGeometry = new BufferGeometry();
  const positions = new Float32Array(numStars * 3);

  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * 600 - 300;
    const y = Math.random() * 600 - 300;
    const z = Math.random() * 600 - 300;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  starGeometry.setAttribute('position', new BufferAttribute(positions, 3));

  const starMaterial = new PointsMaterial({ color: 0xffffff });

  return (
    <points ref={starRef} geometry={starGeometry} material={starMaterial} />
  );
}

function RedPlanet() {
  const fadedGlowRef = useRef();

  useFrame(() => {
    if (fadedGlowRef.current) {
      fadedGlowRef.current.rotation.y += 0.1;
    }
  });

  const fadedGlowGeometry = new SphereGeometry(0.3, 32, 32);
  const fadedGlowMaterial = new MeshPhongMaterial({
    color: 0xffb2b2,
    shininess: 50,
    transparent: true,
    opacity: 1,
  });

  const x = 3;
  const y = 1;
  const z = 0;

  return (
    <mesh
      ref={fadedGlowRef}
      geometry={fadedGlowGeometry}
      material={fadedGlowMaterial}
      position={[x, y, z]}
    />
  );
}
function YellowPlanet() {
  const fadedGlowRef = useRef();

  useFrame(() => {
    if (fadedGlowRef.current) {
      fadedGlowRef.current.rotation.y += 0.1;
    }
  });

  const fadedGlowGeometry = new SphereGeometry(0.3, 32, 32);
  const fadedGlowMaterial = new MeshPhongMaterial({
    color: 0xffe599,
    shininess: 50,
    transparent: true,
    opacity: 1,
  });

  const x = -3;
  const y = -1;
  const z = 0;

  return (
    <mesh
      ref={fadedGlowRef}
      geometry={fadedGlowGeometry}
      material={fadedGlowMaterial}
      position={[x, y, z]}
    />
  );
}

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
        <RedPlanet />
        <YellowPlanet />
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
