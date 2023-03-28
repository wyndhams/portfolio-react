import React from 'react';

import ThreeScene from './components/ThreeScene';
import About from './components/About';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Contact from './components/Contact';

import './styles/App.css';
import './styles/Scrollbar.css';
import Education from './components/Education';

function App() {
  return (
    <container className='page'>
      <ThreeScene />
      <Navbar />
      <container className='body'>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Interests />
        <Contact />
      </container>
    </container>
  );
}

export default App;
