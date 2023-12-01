import React, { useState } from 'react';
import { Flex, Image, Button, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import CarritoCompras from './CarritoCompras';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isHovered, setIsHovered] = useState(null);
  const handleScrollToTop = () => {
    window.scrollTo({ bottom: 0, behavior: 'smooth' });
  };

  const navigate = useNavigate();

  return (
    <Flex
      style={{ marginTop: '80px', fontFamily: 'Sora, sans-serif' }}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white.300"
      color="black"
      mt="12"
      ml={{ base: '0', md: '2' }}
    >
      <Flex align="center" mr={2}>
        <Image
          src="data:image/png;base64,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"
          alt="Logo"
          boxSize="130px"
          objectFit="cover"
          borderRadius="20"
          cursor='pointer'
          onClick={() => {
            navigate('/');
            setIsMenuOpen(false);
          }}
        />
      </Flex>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        {/* Menú original visible siempre en pantallas grandes */}
        <Flex align="center" direction="row" display={{ base: 'none', md: 'flex' }}>
          <Button
            variant="ghost"
            color={isHovered === 'inicio' ? 'pink.500' : 'black'}
            mr={2} // Ajusta el margen derecho aquí
            fontSize="18px"
            _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
            onMouseEnter={() => setIsHovered('inicio')}
            onMouseLeave={() => setIsHovered(null)}
            onClick={() => {
              navigate('/');
              setIsMenuOpen(false);
            }}
          >
            Inicio
          </Button>
          <Button
            variant="ghost"
            color={isHovered === 'productos' ? 'pink.500' : 'black'}
            mr={2} // Ajusta el margen derecho aquí
            fontSize="18px"
            _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
            onMouseEnter={() => setIsHovered('productos')}
            onMouseLeave={() => setIsHovered(null)}
            onClick={() => {
              navigate('/Productos');
              setIsMenuOpen(false);
            }}
          >
            Productos
          </Button>
          <Button
            variant="ghost"
            color={isHovered === 'contacto' ? 'pink.500' : 'black'}
            mr={2} // Ajusta el margen derecho aquí
            fontSize="18px"
            _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
            onMouseEnter={() => setIsHovered('contacto')}
            onMouseLeave={() => setIsHovered(null)}
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Contacto
          </Button>
        </Flex>
      </div>
      {/* Menú hamburguesa */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <MenuButton
          as={IconButton}
          icon={<FaBars style={{ fontSize: '1.5rem', color: '#000' }} />}
          variant="ghost"
          color="black"
          display={{ base: 'block', md: 'none' }}
          onClick={handleToggleMenu}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '1rem',
            padding: '0.2rem',
          }}
        />
        <MenuList>
        
          <MenuItem>
          <Link to="/Inicio">Inicio</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Productos">Productos</Link>
          </MenuItem>
          <MenuItem onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Contacto
          </MenuItem>
        </MenuList>
      </Menu>
      <CarritoCompras />
    </Flex>
  );
};

export default NavBar;