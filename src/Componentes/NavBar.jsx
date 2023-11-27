import React from 'react';



const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={leftContainerStyle}>
        <img
          src="URL_DEL_LOGO" // Reemplaza esto con la URL real de tu logo
          alt="Logo de la marca"
          style={logoStyle}
        />
      </div>
      <div style={rightContainerStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            
            <span>Inicio</span>
          </li>
          <li style={navItemStyle}>
            
            <span>Carrito</span>
          </li>
          <li style={navItemStyle}>
            
            <span>Cuenta</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#fff',
  color: '#000',
  padding: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '50px', // Ajusta el margen superior para ubicarlo más abajo
};

const leftContainerStyle = {
  flex: 4,
};

const rightContainerStyle = {
  flex: 1,
  textAlign: 'right',
};

const logoStyle = {
  maxWidth: '100px',
};

const navListStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const navItemStyle = {
  marginRight: '20px',
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  marginRight: '5px',
};

export default Navbar;