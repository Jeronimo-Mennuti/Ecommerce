import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaShippingFast } from 'react-icons/fa';

const Header = () => {
    return (
      <header style={headerStyle}>
        <div style={leftContainerStyle}>
          <FaFacebook size="1.5rem" style={iconStyle} />
          <FaInstagram size="1.5rem" style={iconStyle} />
          <FaPhone size="1.5rem" style={iconStyle} />
          <span style={phoneNumberStyle} fontFamily='Sora'>+1 234 567 890</span>
        </div>
        <div style={rightContainerStyle}>
          <FaShippingFast size="1.5rem" style={iconStyle} />
          <span style={freeShippingStyle} fontFamily='Sora'>Envíos Gratis</span>
        </div>
      </header>
    );
  };
  
  const headerStyle = {
    position: 'absolute',
    top: -80,
    left: 0,
    width: '100%',
    backgroundColor: '#ff99cc',
    padding: '23px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    
  };
  
  const leftContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const rightContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px', // Ajusta el margen derecho según tus necesidades
  };
  
  const iconStyle = {
    marginRight: '10px',
    cursor: 'pointer',
    color: '#fff',
  };
  
  const phoneNumberStyle = {
    fontSize: '0.9rem',
    color: '#fff',
    fontFamily:'Sora'
  };
  
  const freeShippingStyle = {
    fontSize: '1rem',
    color: '#fff',
    fontFamily:'Sora'
  };
  
  
  

export default Header;