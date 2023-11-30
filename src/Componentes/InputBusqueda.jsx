import React, { useState } from 'react';
import { Input, InputGroup, Box, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import Fuse from 'fuse.js';

const InputBusqueda = ({ productos, onBusqueda }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusqueda = (value) => {
    setBusqueda(value);

    if (value === '') {
      onBusqueda(productos);
    } else {
      const options = {
        keys: ['nombre'],
        includeScore: true,
        threshold: 0.4,
      };

      const fuse = new Fuse(productos, options);
      const result = fuse.search(value);
      const productosFiltrados = result.map((item) => item.item);

      onBusqueda(productosFiltrados);
    }
  };

  return (
    <div>
      <InputGroup>
      <Input
  placeholder="Buscar producto por nombre"
  value={busqueda}
  onChange={(e) => handleBusqueda(e.target.value)}
  borderRadius="md"
  px={3} // Reduje el tamaño horizontal
  size="md" // Tamaño pequeño
  _focus={{ borderColor: 'none', boxShadow: 'none' }}
  w={{ base: '50%', md: '50%', lg: '20%' }} // Ancho del 100% en pantallas pequeñas, 50% en medianas y 30% en grandes
/>
      </InputGroup>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={4}>
        {productos.map((producto) => (
          <GridItem key={producto.id}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              display={producto.mostrar ? 'block' : 'none'}
            >
              <Image src={producto.imagen} alt={producto.nombre} />
              <Box p="4">
                <Text fontWeight="semibold" fontSize="lg" mb="2">
                  {producto.nombre}
                </Text>
                <Text>{producto.categoria}</Text>
                <Text color="gray.500">${producto.precio}</Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default InputBusqueda;

