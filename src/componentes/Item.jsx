import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div
        style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            width: "200px",
        }}
        >
        <h4>{producto.nombre}</h4>
        <p>Precio: ${producto.precio}</p>
        <Link to={`/item/${producto.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;
