import React from 'react';
import { Link } from 'react-router-dom';
import './name.css';
import './color.css';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1.2%'}}>
      <div className="left">
      <Link to="/HomePage">Varun Saxena</Link>
      </div>
      <div className = "right">
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;