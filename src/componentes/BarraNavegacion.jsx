import React from "react";
import { Link } from "react-router-dom";
import Carrito from "./Carrito";

const BarraNavegacion = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#f5f5f5" }}>
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h2>LuminaLámparas</h2>
        </Link>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/">Inicio</Link>
        <Link to="/categoria/modernas">Modernas</Link>
        <Link to="/categoria/vintage">Vintage</Link>
        <Link to="/categoria/oficina">Oficina</Link>
        <Link to="/categoria/rusticas">Rústicas</Link>
        <Carrito />
      </div>
    </nav>
  );
};

export default BarraNavegacion;
