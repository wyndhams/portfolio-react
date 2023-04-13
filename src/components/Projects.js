import React from 'react';
import Festi from '../assets/festi.png';
import FullStacked from '../assets/full-stacked.png';
import SongYear from '../assets/song-year.png';
import BassInvaders from '../assets/bass-invaders.png';

function Projects() {
  return (
    <>
      <h1 id='title'>Projects</h1>
      {window.innerWidth < 992 ? (
        <div className='projects'>
          <div className='project-wrapper-1'>
            <div className='project'>
              <h2 id='title2'>Festi App</h2>
              <h4>
                Timeframe: 1 Week | Solo
                <br />
                Languages & Frameworks: Python, Django, React, HTML, CSS,
                PostgreSQL, Material UI
              </h4>
              <a
                href='https://festi-front-end.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Deployed Site
              </a>
              <br />
              <a
                href='https://github.com/wyndhams/ga-project-4-backend'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Repo
              </a>
              <br />
              <p>
                Festi is a full-stack application designed to help users search
                for new music festivals for summer months. This is the first
                project using Django as a backend framework for api routing and
                used PostGreSQL to create the database of festivals. I developed
                a React frontend application with Material UI for styling.
              </p>
              {/* <img src="" alt="" /> */}
            </div>
            <img src={Festi} alt='Festi Web App' className='project-image' />
          </div>
          <div className='project-wrapper-1'>
            <div className='project'>
              <h2 id='title2'>Bass Invaders</h2>
              <h4>
                Timeframe: 1 week | Solo
                <br />
                Languages: HTML, CSS, JavaScript
              </h4>
              <a
                href='https://wyndhams.github.io/ga-project-1/'
                target='_blank'
                rel='noreferrer'
              >
                Deployed Site
              </a>
              <br />

              <a
                href='https://github.com/wyndhams/ga-project-1'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Repo
              </a>
              <p>
                I developed my own version of the classic game Space Invaders
                using strictly vanilla HTML, CSS and JavaScript. I had a lot of
                fun implementing logic in this project to increase difficulty
                through levels of the game.
              </p>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <img
            src={BassInvaders}
            alt='Bass Invaders Web Game'
            className='project-image'
          />
          <div className='project-wrapper-1'>
            <div className='project'>
              <h2 id='title2'>Full Stacked App</h2>
              <h4>
                Timeframe: 5 days | Team of 3
                <br />
                Languages & Frameworks: MERN Stack, Material UI, CSS
              </h4>
              <a
                href='https://wyndhams-project-3-frontend.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Deployed Site
              </a>
              <br />
              <a
                href='https://github.com/wyndhams/ga-project-3-backend'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Repo
              </a>
              <br />
              <p>
                Full Stacked is a fitness web application that allows users to
                navigate a database of workouts, view information about them and
                select exercises to be recorded in a workout log. My role in the
                team was to develop the backend API and all routing in the
                frontend to display data from the database. I was also actively
                involved in bug fixing for the other members of my team.
              </p>
              {/* <img src="" alt="" /> */}
            </div>
            <img
              src={FullStacked}
              alt='Full Stacked Web App'
              className='project-image'
            />
          </div>
          <div className='project-wrapper-1'>
            <div className='project'>
              <h2 id='title2'>Pick A Year App</h2>
              <h4>
                Timeframe: 3 days | Team of 2
                <br />
                Languages & Frameworks: React, Material UI, CSS
              </h4>
              <a
                href='https://wyndhams-ga-project-2.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Deployed Site
              </a>
              <br />
              <a
                href='https://github.com/wyndhams/ga-project-2'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Repo
              </a>
              <br />
              <p>
                This project was developed using Napster’s public API to select
                a specific year on the home page and to have a random song from
                that year displayed on a separate page. My role in this project
                was to work with the external API to display a random song from
                the given year.
              </p>
              {/* <img src="" alt="" /> */}
            </div>
            <img
              src={SongYear}
              alt='Song Year Web App'
              className='project-image'
            />
          </div>
        </div>
      ) : (
        <div className='projects'>
          <div className='project-wrapper-1'>
            <div className='project-1'>
              <h2 id='title2'>Festi App</h2>
              <h4>
                Timeframe: 1 Week | Solo
                <br />
                Languages & Frameworks: Python, Django, React, HTML, CSS,
                PostgreSQL, Material UI
              </h4>
              <a
                href='https://festi-front-end.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Deployed Site
              </a>
              <br />
              <a
                href='https://github.com/wyndhams/ga-project-4-backend'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Repo
              </a>
              <br />
              <p>
                Festi is a full-stack application designed to help users search
                for new music festivals for summer months. This is the first
                project using Django as a backend framework for api routing and
                used PostGreSQL to create the database of festivals. I developed
                a React frontend application with Material UI for styling.
              </p>
              {/* <img src="" alt="" /> */}
            </div>
            <img src={Festi} alt='Festi Web App' className='project-image' />
          </div>
          <div className='project-wrapper-1'>
            <img
              src={BassInvaders}
              alt='Bass Invaders Web Game'
              className='project-image'
            />
            <div className='project-2'>
              <h2 id='title2'>Bass Invaders</h2>
              <h4>
                Timeframe: 1 week | Solo
                <br />
                Languages: HTML, CSS, JavaScript
              </h4>
              <a
                href='https://wyndhams.github.io/ga-project-1/'
                target='_blank'
                rel='noreferrer'
              >
                Deployed Site
              </a>
              <br />

              <a
                href='https://github.com/wyndhams/ga-project-1'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Repo
              </a>
              <p>
                I developed my own version of the classic game Space Invaders
                using strictly vanilla HTML, CSS and JavaScript. I had a lot of
                fun implementing logic in this project to increase difficulty
                through levels of the game.
              </p>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <div className='project-wrapper-1'>
            <div className='project-1'>
              <h2 id='title2'>Full Stacked App</h2>
              <h4>
                Timeframe: 5 days | Team of 3
                <br />
                Languages & Frameworks: MERN Stack, HTML, CSS, Material UI
              </h4>
              <a
                href='https://wyndhams-project-3-frontend.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Deployed Site
              </a>
              <br />
              <a
                href='https://github.com/wyndhams/ga-project-3-backend'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Repo
              </a>
              <br />
              <p>
                Full Stacked is a fitness web application that allows users to
                navigate a database of workouts, view information about them and
                select exercises to be recorded in a workout log. My role in the
                team was to develop the backend API and all routing in the
                frontend to display data from the database. I was also actively
                involved in bug fixing for the other members of my team.
              </p>
              {/* <img src="" alt="" /> */}
            </div>
            <img
              src={FullStacked}
              alt='Full Stacked Web App'
              className='project-image'
            />
          </div>
          <div className='project-wrapper-1'>
            <img
              src={SongYear}
              alt='Song Year Web App'
              className='project-image'
            />
            <div className='project-2'>
              <h2 id='title2'>Pick A Year App</h2>
              <h4>
                Timeframe: 3 days | Team of 2
                <br />
                Languages & Frameworks: React, HTML, CSS, Sass
              </h4>
              <a
                href='https://wyndhams-ga-project-2.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Deployed Site
              </a>
              <br />

              <a
                href='https://github.com/wyndhams/ga-project-2'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Repo
              </a>
              <br />

              <p>
                This project was developed using Napster’s public API to select
                a specific year on the home page and to have a random song from
                that year displayed on a separate page. My role in this project
                was to work with the external API to display a random song from
                the given year.
              </p>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
