import React from 'react';

const Carrito = () => {
  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <span role="img" aria-label="carrito">🛒</span>
      <span 
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '12px'
        }}
      >
        2
      </span>
    </div>
  );
};

export default Carrito;
