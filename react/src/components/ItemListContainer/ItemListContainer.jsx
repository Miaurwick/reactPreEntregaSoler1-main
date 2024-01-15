import React from "react";
import "./ItemListContainer.css";
import Cards from "../Cards/Cards";


const ItemListContainer = ({ bienvenida }) => {
  return (
    <div className="bienvenidaBody">
      <h2>{bienvenida}</h2>
      <Cards/>
    </div>
  );
};

export default ItemListContainer;
