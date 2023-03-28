import React, { useRef } from 'react';

import { useFrame, extend, Canvas } from 'react-three-fiber';
import {
  PointsMaterial,
  Points,
  SphereGeometry,
  MeshPhongMaterial,
  BufferGeometry,
  BufferAttribute,
  Group,
  Mesh,
  MeshBasicMaterial,
  TextureLoader,
  PlaneGeometry,
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

function LogoPlanet() {
  const logoPlanetRef = useRef();

  useFrame(() => {
    if (logoPlanetRef.current) {
      logoPlanetRef.current.rotation.y += 0.1;
    }
  });

  const logoPlanetGeometry = new SphereGeometry(1, 32, 32);
  const logoPlanetMaterial = new MeshPhongMaterial({
    color: 0x64a8d3,
    shininess: 50,
    transparent: true,
    opacity: 1,
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

  const planetGeometry = new SphereGeometry(1.2, 32, 32);
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

function PlanetGlow() {
  const glowRef = useRef();

  useFrame(() => {
    if (glowRef.current) {
      glowRef.current.rotation.y += 0.1;
    }
  });

  const glowGeometry = new SphereGeometry(1.5, 32, 32);
  const glowMaterial = new MeshPhongMaterial({
    color: 0x64a8d3,
    shininess: 50,
    transparent: true,
    opacity: 0.3,
  });
  return <mesh ref={glowRef} geometry={glowGeometry} material={glowMaterial} />;
}

class Logo extends Group {
  constructor({ position, imageSrc, url }) {
    super();

    // Load the image using TextureLoader
    const texture = new TextureLoader().load(imageSrc);

    // Create a plane geometry to represent the logo
    const geometry = new PlaneGeometry(4, 4);
    const material = new MeshBasicMaterial({ map: texture });
    const mesh = new Mesh(geometry, material);

    // Set the position of the logo
    mesh.position.set(position.x, position.y, position.z);

    // Add the mesh to the group
    this.add(mesh);

    // Add a click event listener to the logo that opens the provided url in a new tab
    mesh.addEventListener('click', () => {
      window.open(url, '_blank');
    });
  }
}

function LogoOrbit({ position, radius, speed, children }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const angle = (clock.getElapsedTime() * speed) % (2 * Math.PI);
    const x = radius * Math.sin(angle);
    const z = radius * Math.cos(angle);

    if (ref.current) {
      ref.current.position.set(x, 0, z);
    }
  });

  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

function Logos() {
  const logos = [
    {
      imageSrc: '../assets/linkedin-logo.png',
      url: 'https://www.linkedin.com/in/wyndham-roy/',
    },
    {
      imageSrc: '../assets/github-logo.png',
      url: 'https://github.com/wyndhams',
    },
  ];

  return (
    <>
      {logos.map((logo, i) => (
        <LogoOrbit
          key={i}
          logo={<Logo imageSrc={logo.imageSrc} url={logo.url} />}
          radius={50}
          speed={0.01 * (i + 1)}
        />
      ))}
    </>
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
        <LogoPlanet />
        <Planet />
        <PlanetGlow />
        <FadedPlanetGlow />
        <Logos />
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
        <div className='logo'>
          <a
            href='https://github.com/wyndhams'
            target='_blank'
            rel='noreferrer'
          >
            <img src={GitHubLogo} alt='GitHub Icon' className='logo' />
          </a>
          <a
            href='https://www.linkedin.com/in/wyndham-roy/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={LinkedInLogo} alt='LinkedIn Icon' className='logo' />
          </a>
        </div>
        <h1 id='home-title'>Wyndham Roy</h1>
        <h2 id='home-title2'>Software Engineer</h2>
      </div>
      <Arrow onClick={handleArrowClick} />
    </>
  );
}
