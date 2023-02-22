import React from 'react';
import GitHubLogo from '../assets/github-white.png';
import LinkedInLogo from '../assets/linkedin-white.png';
import EmailLogo from '../assets/email-white.png';
import SoundCloudLogo from '../assets/soundcloud-white.png';
import YouTubeLogo from '../assets/youtube-white.png';

const Contact = () => {
  return (
    <>
      <h1 id='title'>Contact</h1>
      <div className='logo'>
        <a href='https://github.com/wyndhams' target='_blank' rel='noreferrer'>
          <img src={GitHubLogo} alt='GitHub Icon' className='logo' />
        </a>
        <a
          href='https://www.linkedin.com/in/wyndham-roy/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={LinkedInLogo} alt='LinkedIn Icon' className='logo' />
        </a>
        <a
          href='mailto: wyn.roy@hotmail.co.uk'
          target='_blank'
          rel='noreferrer'
        >
          <img src={EmailLogo} alt='LinkedIn Icon' className='logo' />
        </a>
        <a
          href='https://soundcloud.com/wyndhamelliot'
          target='_blank'
          rel='noreferrer'
        >
          <img src={SoundCloudLogo} alt='GitHub Icon' className='logo' />
        </a>
        <a
          href='https://www.youtube.com/@swivelrecords'
          target='_blank'
          rel='noreferrer'
        >
          <img src={YouTubeLogo} alt='LinkedIn Icon' className='logo' />
        </a>
      </div>
      <p>Wyndham Design</p>
    </>
  );
};

export default Contact;
