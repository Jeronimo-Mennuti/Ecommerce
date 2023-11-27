import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]); // Estado para almacenar los productos en el carrito
  const [cartOpen, setCartOpen] = useState(false); // Estado para controlar la visibilidad del menú

  // Función para agregar un producto al carrito
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Función para alternar la visibilidad del menú
  const handleToggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div style={cartContainerStyle}>
      <div onClick={handleToggleCart} style={cartIconStyle}>
        <FontAwesomeIcon icon={faShoppingCart} style={iconStyle} />
        <span>Carrito ({cartItems.length})</span>
      </div>
      {cartOpen && (
        <div style={cartMenuStyle}>
          {cartItems.map((product, index) => (
            <div key={index} style={cartMenuItemStyle}>
              {product.name} - ${product.price}
            </div>
          ))}
          {cartItems.length === 0 && <p>No hay productos en el carrito.</p>}
        </div>
      )}
    </div>
  );
};

const cartContainerStyle = {
  position: 'relative',
};

const cartIconStyle = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  marginRight: '5px',
};

const cartMenuStyle = {
  position: 'absolute',
  top: '100%',
  right: '0',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  padding: '16px',
  zIndex: 1,
};

const cartMenuItemStyle = {
  marginBottom: '8px',
};

export default ShoppingCart;