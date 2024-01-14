import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ bienvenida }) => {
  return (
    <div className="bienvenidaBody">
      <h2>{bienvenida}</h2>
    </div>
  );
};

export default ItemListContainer;
