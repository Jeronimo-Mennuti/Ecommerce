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

    // Verificar si terminoBusqueda es una cadena antes de realizar operaciones de cadena
    const terminoBusquedaLowerCase = typeof value === 'string' ? value.toLowerCase() : value;

    const result = fuse.search(terminoBusquedaLowerCase);
    
    const productosFiltrados = result.map((item) => item.item);

    onBusqueda(productosFiltrados);
  }
};

  return (
    <div style={{ textAlign: 'right', marginRight: '1rem' }}>
      <InputGroup>
        <Input
          placeholder="Buscar producto"
          value={busqueda}
          onChange={(e) => handleBusqueda(e.target.value)}
          borderRadius="md"
          px={3}
          size="md"
          _focus={{ borderColor: 'none', boxShadow: 'none' }}
          w={{ base: '90%', md: '70%', lg: '90%' }} // Ancho del 90% en pantallas pequeñas, 70% en medianas y 90% en grandes
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
        }
export default InputBusqueda;