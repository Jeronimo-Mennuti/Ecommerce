import React, { useState } from 'react';
import Header from '../Componentes/Header';
import NavBar from './NavBar';
import { Box, Text, Flex, Image, ChakraProvider } from '@chakra-ui/react';
import Footer from '../Componentes/Footer';
import FiltroProductos from './FiltroProductos';
import InputBusqueda from './InputBusqueda';
import BotonAgregarCarrito from './BotonAgregarCarrito';

const productos = [
  {
    id: 1,
    categoria: 'Tinto',
    nombre: 'EL ACOMPAÑANTE - BOTELLA 750C',
    imagen: 'https://via.placeholder.com/150',
    precio: '4000',
    tipo: 'botella'
  },
  {
    id: 2,
    categoria: 'Tinto',
    nombre: 'DE LADO A LADO - BOTELLA DE 750C',
    imagen: 'https://via.placeholder.com/150',
    precio: '4000',
    tipo: 'botella'
  },
  {
    id: 3,
    categoria: 'Tinto',
    nombre: 'EUPOROS DE ORO - BOTELLA 750C',
    imagen: 'https://via.placeholder.com/150',
    precio: '6000',
    tipo: 'botella'
  },
  {
    id: 4,
    categoria: 'Blanco',
    nombre: 'PINIO - BOTELLA DE 75C',
    imagen: 'https://via.placeholder.com/150',
    precio: '6000',
    tipo: 'botella'
  },
  {
    id: 5,
    categoria: 'Tinto',
    nombre: 'VALUS - CAJA DE SEIS',
    imagen: 'https://via.placeholder.com/150',
    precio: '2000',
    tipo: 'botella'
  },
  {
    id: 6,
    categoria: 'Tinto',
    nombre: 'EL ACOMPAÑANTE - CAJA DE SEIS',
    imagen: 'https://via.placeholder.com/150',
    precio: '2000',
    tipo: 'caja'
  },
  {
    id: 7,
    categoria: 'Blanco',
    nombre: 'DE LADO A LADO - PALLET',
    imagen: 'https://via.placeholder.com/150',
    precio: '2000',
    tipo: 'pallet'
  },
  {
    id: 8,
    categoria: 'Blanco',
    nombre: 'EUPOROS - PALLET',
    imagen: 'https://via.placeholder.com/150',
    precio: '8000',
    tipo: 'pallet'
  },
  {
    id: 9,
    categoria: 'Blanco',
    nombre: 'PININO - PALLET',
    imagen: 'https://via.placeholder.com/150',
    precio: '8000',
    tipo: 'pallet'
  },
  {
    id: 10,
    categoria: 'Blanco',
    nombre: 'VALUS - PALLET',
    imagen: 'https://via.placeholder.com/150',
    precio: '8000',
    tipo: 'pallet'
  },

];


export default function Productos({ onAgregarAlCarrito }) {
  const [orden, setOrden] = useState('default');
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  const handleOrdenChange = (event) => {
    const nuevaOrden = event.target.value;
    setOrden(nuevaOrden);
  };

  const handleAgregarAlCarrito = (producto) => {
    console.log('Agregando al carrito:', producto.nombre);

  };

  const ordenarProductos = (productos, orden) => {
    return productos.slice().sort((a, b) => {
      if (orden === 'categoria') {
        return a.categoria.localeCompare(b.categoria);
      } else if (orden === 'precio-bajo') {
        return parseFloat(a.precio) - parseFloat(b.precio);
      } else if (orden === 'precio-alto') {
        return parseFloat(b.precio) - parseFloat(a.precio);
      } else {
        // Si la opción de orden no es reconocida, devolver los productos sin cambios
        return 0;
      }
    });
  };

  const handleBusqueda = (terminoBusqueda) => {
    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    setProductosFiltrados(productosFiltrados);
  };

  const productosOrdenados = ordenarProductos(productosFiltrados, orden);
  console.log('Productos ordenados:', productosOrdenados);


  try {
    return (
      <ChakraProvider>
        <Header />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <NavBar />
          <div style={{ position: 'sticky', top: 0, width: '100%', background: 'white', textAlign: 'center' }}>
            <h1 style={{ fontSize: '50px', marginBottom: '20px' }}>Nuestra Selección</h1>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-around', marginBottom: '-10px' }}>
              <InputBusqueda productos={productos} onBusqueda={handleBusqueda} />
              <FiltroProductos orden={orden} onOrdenChange={handleOrdenChange} />
            </div>
          </div>
        </div>
        <Flex direction="column" align="center" justify="center" style={{ marginTop: '-10px' }}>
          <Flex wrap="wrap" justify="space-around" maxW="1000px" mx="auto">
            {productosOrdenados &&
              productosOrdenados.map((producto) => (
                <Box
                  key={producto.id}
                  w={{ base: '100%', md: '50%', lg: '25%' }}
                  p={4}
                  h="100%"
                >
                  <Flex direction="column" align="center" h="100%">
                    <Image src={producto.imagen} alt={producto.nombre} />
                    <Box p="6" textAlign="center">
                      <Text fontWeight="semibold" fontFamily="Assistant" fontSize="17" mb="2">
                        {producto.nombre}
                      </Text>
                      <Text color="gray.500">${producto.precio}</Text>
                      <BotonAgregarCarrito onClick={() => handleAgregarAlCarrito(producto)} />
                    </Box>
                  </Flex>
                </Box>
              ))}
          </Flex>
        </Flex>
        <Footer />
      </ChakraProvider>
    );
  } catch (error) {
    console.error('Error al renderizar las tarjetas:', error);
    return null; // O muestra un mensaje de error en lugar de retornar null
  }
}