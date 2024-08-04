import React, { useEffect } from 'react';
import './color.css';
import './name.css';
import Footer from './Footer';

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const fades = document.querySelectorAll('.fade');
    fades.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show3');
        } else {
          entry.target.classList.remove('show3');
        }
      });
    });

    const fades = document.querySelectorAll('.fade3');
    fades.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='container contact-container'>
      <div className='text' style={{ marginLeft: '5%', marginTop: '3%'}}>
        <h1 className='fade' style={{ fontSize: '300%' }}>Contact</h1>
        <p className='fade'>
          If you'd like to contact me, whether you want to add me on your team, want assistance on a project or application,
          or to learn more about me, email me at:
        </p>
        <p className='fade'>
          <a className='email' href="mailto:varunsaxena314@gmail.com">
            varunsaxena314@gmail.com
          </a>
        </p>
        <p style={{ marginTop: '5%' }} className='fade'>
          You may also contact me and check out more about me here!
        </p>
        <div className='LinkButtons'>
          <p className='fade3'>
            <a href='https://docs.google.com/document/d/1Ku1VgcknSs8NiKiHI02iq665LjqevQTLAAu6wrzEr2s/edit' target='_blank' rel='noopener noreferrer'>
              <button className='BLink'>Resume</button>
            </a>
          </p>
          <p className='fade3'>
            <a href='https://www.linkedin.com/in/varun-saxena314/' target='_blank' rel='noopener noreferrer'>
              <button className='BLink'>LinkedIn</button>
            </a>
          </p>
          <p className='fade3'>
            <a href='https://github.com/Varun-Saxena314' target='_blank' rel='noopener noreferrer'>
              <button className='BLink'>GitHub</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;