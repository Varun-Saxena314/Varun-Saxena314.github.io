import React from 'react';
import TypeWriter from './Assets/Typewriter';
import './name.css';
import './media.css';
import myImage from './images/Profile.JPG';
const HomePage = () => {
  return (
    <div className='TheHomePage'>
    <div className='homepage'>
    <div className='GreetingPage'>
      <div className = 'gap gradient' >Hello World!</div>
      <div className='gap gradient'>My name is Varun Saxena</div>
      <div className = 'gap' ><TypeWriter/></div>
    </div>
    <div className='LinkButtons'>
      <a href='https://docs.google.com/document/d/1Ku1VgcknSs8NiKiHI02iq665LjqevQTLAAu6wrzEr2s/edit' target='_blank' rel='noopener noreferrer'>
        <button className='BLink'>Resume</button>
      </a>
      <a href='https://www.linkedin.com/in/varun-saxena314/' target='_blank' rel='noopener noreferrer'>
        <button className='BLink'>LinkedIn</button>
      </a>
      <a href='https://github.com/Varun-Saxena314' target='_blank' rel='noopener noreferrer'>
        <button className='BLink'>GitHub</button>
      </a>
    </div>
    </div>
    <div className='picture'>
        <img src={myImage} alt="Profile" />
    </div>
    </div>
  );
};

export default HomePage;