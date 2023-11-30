import React from 'react';
import { FaFacebook, FaInstagram, FaShippingFast, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={leftContainerStyle}>
      <span style={FollowStyle}>Follow in </span>
        <FaFacebook size="1.5rem" style={iconStyle} />
        <FaInstagram size="1.5rem" style={iconStyle} />
        
      </div>
      <div style={centerContainerStyle}>
        
        <div style={separatorStyle}></div>
        <FaGlobe size="1.5rem" style={iconStyle} />
        <span style={purchaseProtectionStyle}>Compra Protegida</span>
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

const centerContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const separatorStyle = {
  height: '1.5rem',
  width: '1px',
  backgroundColor: '#fff',
  margin: '0 10px',
};

const iconStyle = {
  marginRight: '10px',
  cursor: 'pointer',
  color: '#fff',
};

const FollowStyle = {
  fontSize: '0.9rem',
  color: '#fff',
  fontFamily: 'Sora',
  marginRight: '12px'
};

const purchaseProtectionStyle = {
  fontSize: '1rem',
  color: '#fff',
  fontFamily: 'Sora',
  marginRight: '5px'
};

export default Header;
