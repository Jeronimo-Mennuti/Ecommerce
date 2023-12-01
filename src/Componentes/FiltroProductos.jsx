import React from 'react';
import { Flex, Select } from '@chakra-ui/react';

const FiltroProductos = ({ orden, onOrdenChange }) => {
  return (
    <Flex justify="flex-start" mt="6">
      <Select value={orden} onChange={onOrdenChange} maxWidth="200px">
        <option value="default" disabled hidden>
          Orden Predeterminado
        </option>
        <option value="orden predeterminado">Orden Predeterminado</option>
        <option value="precio-bajo">Precio más bajo</option>
        <option value="precio-alto">Precio más alto</option>
        <option value="categoria">Categoría</option>
        <option value="tipo">Tipo</option>
      </Select>
    </Flex>
  );
};

export default FiltroProductos;