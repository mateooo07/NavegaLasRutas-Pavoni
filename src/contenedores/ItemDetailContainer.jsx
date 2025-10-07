import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";
import ItemDetail from "../componentes/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const getProducto = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find((p) => p.id === parseInt(id)));
        }, 1000);
        });

        getProducto.then((res) => setProducto(res));
    }, [id]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
        {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;
