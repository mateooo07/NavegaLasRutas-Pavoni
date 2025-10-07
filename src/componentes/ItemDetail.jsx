import React from "react";

const ItemDetail = ({ producto }) => {
    return (
        <div
        style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "400px",
            margin: "auto",
        }}
        >
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>
            <strong>Precio:</strong> ${producto.precio}
        </p>
        <button>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetail;
