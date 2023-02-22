import html from '../assets/html.png';
import css from '../assets/css.png';
import sass from '../assets/sass.png';
import bulma from '../assets/bulma.png';
import mui from '../assets/mui.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import three from '../assets/three.png';
import vue from '../assets/vue.png';
import cloudinary from '../assets/cloudinary.png';

import express from '../assets/express.png';
import JSON from '../assets/json.png';
import mongoDB from '../assets/mongodb.png';
import mongoose from '../assets/mongoose.png';
import node from '../assets/node.png';
import django from '../assets/django.png';
import python from '../assets/python.png';
import npm from '../assets/npm.png';
import postgresql from '../assets/postgresql.png';
import postman from '../assets/postman.png';
import tableplus from '../assets/tableplus.png';

import git from '../assets/git.png';
import github from '../assets/github.png';
import trello from '../assets/trello.png';
import slack from '../assets/slack.png';
import netlify from '../assets/netlify.png';
import heroku from '../assets/heroku.png';

export default function Skills() {
  const frontendSkills = [
    {
      name: 'HTML',
      image: html,
    },
    {
      name: 'CSS',
      image: css,
    },
    {
      name: 'SCSS',
      image: sass,
    },
    {
      name: 'Bulma',
      image: bulma,
    },
    {
      name: 'MUI',
      image: mui,
    },
    {
      name: 'JavaScript',
      image: javascript,
    },
    {
      name: 'React.js',
      image: react,
    },
    {
      name: 'Three.js',
      image: three,
    },
    {
      name: 'Vue.js',
      image: vue,
    },
  ];

  const backendSkills = [
    {
      name: 'MongoDB',
      image: mongoDB,
    },
    {
      name: 'Mongoose',
      image: mongoose,
    },
    {
      name: 'Node.js',
      image: node,
    },
    {
      name: 'Express',
      image: express,
    },
    {
      name: 'Django',
      image: django,
    },
    {
      name: 'Python',
      image: python,
    },
    {
      name: 'npm',
      image: npm,
    },
    {
      name: 'PostgreSQL',
      image: postgresql,
    },
    {
      name: 'Postman',
      image: postman,
    },
    {
      name: 'JSON',
      image: JSON,
    },
    {
      name: 'TablePlus',
      image: tableplus,
    },
  ];

  const versionControl = [
    {
      name: 'git',
      image: git,
    },
    {
      name: 'GitHub',
      image: github,
    },
  ];

  const otherTechnologies = [
    {
      name: 'Trello',
      image: trello,
    },
    {
      name: 'Slack',
      image: slack,
    },
    {
      name: 'Netlify',
      image: netlify,
    },
    {
      name: 'Heroku',
      image: heroku,
    },
    {
      name: 'Cloudinary',
      image: cloudinary,
    },
  ];

  return (
    <section className='skills' id='skills'>
      <section className='frontend'>
        <h1 className='skill-label'>Frontend</h1>
        {frontendSkills.map((skill) => (
          <div>
            <img src={skill.image} alt={skill.name} className='img' />
            <p sx={{ textAlign: 'center' }}>{skill.name}</p>
          </div>
        ))}
      </section>
      <section className='backend'>
        <h1 className='skill-label'>Backend</h1>
        {backendSkills.map((skill) => (
          <div>
            <img src={skill.image} alt={skill.name} className='img' />
            <p sx={{ textAlign: 'center' }}>{skill.name}</p>
          </div>
        ))}
      </section>
      <section className='other-tech'>
        <h1 className='skill-label'>Other Technologies</h1>
        <div>
          {otherTechnologies.map((skill) => (
            <>
              <img src={skill.image} alt={skill.name} className='img' />
              <p sx={{ textAlign: 'center' }}>{skill.name}</p>
            </>
          ))}
        </div>
      </section>
      <section className='version'>
        <h1 className='skill-label'>Version Control:</h1>
        {versionControl.map((skill) => (
          <div>
            <img src={skill.image} alt={skill.name} className='img' />
            <p sx={{ textAlign: 'center' }}>{skill.name}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
