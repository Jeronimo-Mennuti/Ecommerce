import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

const BotonAgregarCarrito = ({ onClick, precio }) => {
  return (
    <Button
      bg="pink.500"
      color="white"
      borderRadius="md"
      _hover={{ bg: 'pink.600' }}
      onClick={() => onClick(precio)}
    >
      Agregar al Carrito
    </Button>
  );
};

export default BotonAgregarCarrito;