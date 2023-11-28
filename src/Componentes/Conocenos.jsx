import React from 'react';
import { ChakraProvider, Box, Flex, Image, Heading, Text, CSSReset } from '@chakra-ui/react';

function Conocenos() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Flex
        mt={12} // Margen superior de 4 unidades (puedes ajustar según tus necesidades)
        align="center"
        p={12}
        border="4px solid pink"
        borderRadius="30"
        bg="pink.200" // Fondo rosa
        flexDirection={{ base: 'column', md: 'row' }} // Cambia la dirección de la fila a columna en pantallas pequeñas
      >
        <Box mb={{ base: 10, md: 2 }} mr={{ base: 0, md: 8 }}>
          {/* Imagen en la parte izquierda (abajo en pantallas pequeñas) */}
          <Image
            src="https://mavmarketingdigital.com/wp-content/uploads/2021/07/Somos-MAV-Marketing-Digital.jpg"
            alt="Imagen"
            maxW={{ base: '100%', md: '300px' }} // Ancho máximo de la imagen
            objectFit="cover"
            borderRadius="xl"
          />
        </Box>
        <Box>
          {/* Título "Conócenos" */}
          <Heading as="h1" size="xl" color="white" mb={2}>
            Conócenos
          </Heading>
          {/* Texto a continuación del título */}
          <Text color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Conocenos;