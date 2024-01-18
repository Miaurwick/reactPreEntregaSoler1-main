import React from "react";
import "./ItemListContainer.css";
import Cards from "../Cards/Cards";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ bienvenida }) => {
  
  const {categoria} = useParams()
  

  return (
    <div className="bienvenidaBody">
      <h2>{bienvenida}</h2>
      <Cards/>
    </div>
  );
};

export default ItemListContainer;
