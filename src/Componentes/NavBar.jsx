import React, { useState } from 'react';
import { Flex, Image, Button, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isHovered, setIsHovered] = useState(null);

  const handleScrollToTop = () => {
    window.scrollTo({ bottom: 0, behavior: 'smooth' });
  };

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
    >
      <Flex align="center" mr={2}>
        <Image
          src=""
          alt="Logo"
          boxSize="130px"
          objectFit="cover"
          borderRadius="20"
        />
      </Flex>

      {/* Menú original visible siempre en pantallas grandes */}
      <Flex align="center" direction="row" display={{ base: 'none', md: 'flex' }}>
        <Button
          variant="ghost"
          color={isHovered === 'inicio' ? 'pink.500' : 'black'}
          mr={12}
          fontSize="18px"  // Ajusta el tamaño de la fuente aquí
          _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
          onMouseEnter={() => setIsHovered('inicio')}
          onMouseLeave={() => setIsHovered(null)}
        >
          Inicio
        </Button>

        <Link to="/productos">
          <Button
            variant="ghost"
            color={isHovered === 'productos' ? 'pink.500' : 'black'}
            mr={12}
            fontSize="18px"  // Ajusta el tamaño de la fuente aquí
            _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
            onMouseEnter={() => setIsHovered('productos')}
            onMouseLeave={() => setIsHovered(null)}
          >
            Productos
          </Button>
        </Link>

        <Button
          variant="ghost"
          color={isHovered === 'contacto' ? 'pink.500' : 'black'}
          mr={12}
          fontSize="18px"  // Ajusta el tamaño de la fuente aquí
          _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
          onMouseEnter={() => setIsHovered('contacto')}
          onMouseLeave={() => setIsHovered(null)}
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}

        >
          Contacto
        </Button>
      </Flex>

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
          <MenuItem>Inicio</MenuItem>
          <MenuItem>
            <Link to="/productos">Productos</Link>
          </MenuItem>
          <MenuItem onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >Contacto</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavBar;