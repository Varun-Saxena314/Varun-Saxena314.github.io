import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <button onClick={() => document.getElementById('welcome').scrollIntoView({ behavior: 'smooth' })}>Home</button>
      <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About Me</button>
      <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button>
      <button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>Experience</button>
    </nav>
  );
}

export default Navbar;