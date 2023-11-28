import React from 'react';
import { Flex, Spacer, Button, Image } from '@chakra-ui/react';

const Navbar = () => {
  


  return (
    <Flex
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

      <Spacer />

      <Flex align="center" direction="row">
        <Button variant="ghost" color="black" mr={12}>
          Inicio
        </Button>

        <Button variant="ghost" color="black" mr={12}>
          Productos
        </Button>

        <Button variant="ghost" color="black" mr={12}>
          Contacto
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;

