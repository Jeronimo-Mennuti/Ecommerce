import React from 'react';
import { Flex, Select } from '@chakra-ui/react';

const FiltroProductos = ({ orden, onOrdenChange }) => {
    
  return (
    <Flex justify="flex-start" mt="6">
      <Select value={orden} onChange={onOrdenChange} maxWidth="200px">
        <option value="default" disabled hidden>
          Ordenar por
        </option>
        <option value="precioAsc">Precio más bajo</option>
        <option value="precioDesc">Precio más alto</option>
        <option value="categoria">Categoría</option>
        <option value="tipo">Tipo</option>
      </Select>
    </Flex>
  );
};

export default FiltroProductos;