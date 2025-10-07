import React from 'react';

const ContenedorProductos = ({ mensaje }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>{mensaje}</h3>
      <p>Pronto podrás ver nuestro catálogo de lámparas.</p>
    </div>
  );
};

export default ContenedorProductos;
