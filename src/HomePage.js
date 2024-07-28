import React from 'react';
import TypeWriter from './Assets/Typewriter';
import './name.css';
import myImage from './images/Profile.JPG';
const HomePage = () => {
  return (
    <div className='TheHomePage'>
    <div className='homepage' style={{ marginLeft: '4%', overflow: 'hidden', color: "white" }}>
    <div className='GreetingPage'>
      <div style={{ marginTop: '4%', fontSize: '500%' }}>Hello World!</div>
      <div style={{ marginTop: '4%', fontSize: '500%'  }}>My name is Varun Saxena</div>
      <div style={{ marginTop: '4%', fontSize: '500%'  }}><TypeWriter/></div>
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
    <div className='picture' style={{marginRight: '4%'}}>
        /*<img src={myImage} alt="Profile" />*/
    </div>
    </div>
  );
};

export default HomePage;