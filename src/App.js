import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarraNavegacion from "./componentes/BarraNavegacion";
import ItemListContainer from "./contenedores/ItemListContainer";
import ItemDetailContainer from "./contenedores/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a LuminaLámparas!" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "2rem" }}>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
