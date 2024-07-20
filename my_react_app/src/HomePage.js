import React from 'react';
import TypeWriter from './Assets/Typewriter';
import './name.css';
import myImage from './images/Profile.JPG';
const HomePage = () => {
  return (
    <div className='TheHomePage'>
    <div className='homepage' style={{ marginLeft: '4%', overflow: 'hidden', color: "white" }}>
    <div className='GreetingPage'>
      <div style={{ marginTop: '5vh', fontSize: '5vw' }}>Hello World!</div>
      <div style={{ marginTop: '5vh', fontSize: '5vw' }}>My name is Varun Saxena</div>
      <div style={{ marginTop: '5vh', fontSize: '5vw' }}><TypeWriter/></div>
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
    /*<img src={myImage} style={{ width: '120%', maxWidth: '400px', height: 'auto', minHeight: '400px' }} alt="Profile" />*/
    </div>
    </div>
  );
};

export default HomePage;