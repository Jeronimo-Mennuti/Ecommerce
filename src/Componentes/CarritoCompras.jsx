import React, { useState, useEffect } from 'react';
import { Box, Icon, Badge, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, IconButton, useDisclosure } from '@chakra-ui/react';
import { BiShoppingBag } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';

export default function CarritoCompras({ itemCount }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [carrito, setCarrito] = useState([]); // Estado para almacenar productos en el carrito

  const handleAgregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = [...prevCarrito, producto];
      console.log('Agregando al carrito:', producto.nombre);
      console.log('Carrito actualizado:', nuevoCarrito);
      return nuevoCarrito;
    });
  };

  console.log('Estado actual del carrito en CarritoCompras:', carrito);
  
  
return (
    <>
      <Box position="relative" onClick={onOpen} cursor="pointer">
        <Icon as={BiShoppingBag} boxSize={8} fontWeight="normal" />

        {itemCount > 0 && (
          <Badge
            position="absolute"
            top="0"
            right="0"
            transform="translate(50%, -50%)"
            backgroundColor="yellow.400"
            color="white"
          >
            {itemCount}
          </Badge>
        )}
      </Box>

      {/* Drawer para el carrito de compras */}
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        size={{ base: 'full', md: 'sm' }}
        maxW={{ base: '100%', md: '320px' }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottom="0" // Quitar la línea divisoria
            display="flex"
            justifyContent="flex-end" // Alineación al extremo derecho
            alignItems="center"
            pr="4" // Espacio derecho para el botón "X"
          >
            <IconButton
              aria-label="Cerrar carrito"
              icon={<FaTimes />}
              variant="ghost" // Hace que el botón no tenga fondo
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody>
            {/* Lista de productos en el carrito */}
            {carrito.map((producto) => (
              <p key={producto.id}>{producto.nombre}</p>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}