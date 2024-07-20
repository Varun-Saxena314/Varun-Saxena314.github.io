import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid black', 
      padding: '2px', 
      position: 'fixed', 
      bottom: 0, 
      width: '100%', 
      backgroundColor: 'white', 
      zIndex: 100 }}>
      <div style={{ marginLeft: '25%' }}>
        <p>Contact Information:</p>
        <p>varunsaxena314@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;