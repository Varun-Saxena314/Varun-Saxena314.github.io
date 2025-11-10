import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-email">
          <a href="mailto:varunsaxena314@gmail.com" className="footer-link">
            varunsaxena314@gmail.com
          </a>
        </p>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/varun-saxena314/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Varun-Saxena314"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
