import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";
import ItemList from "../componentes/ItemList";

const ItemListContainer = ({ saludo }) => {
    const { categoriaId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(
            categoriaId
                ? productos.filter((p) => p.categoria === categoriaId)
                : productos
            );
        }, 1000);
        });

        getProductos.then((res) => setItems(res));
    }, [categoriaId]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
        <h3>{saludo}</h3>
        <ItemList productos={items} />
        </div>
    );
};

export default ItemListContainer;
