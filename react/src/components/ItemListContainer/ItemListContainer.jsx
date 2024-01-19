import React, { useState,useEffect } from "react";
import "./ItemListContainer.css";
import obtenerProductos from "../Data/Data";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ bienvenida }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos
    .then((respuesta) =>  {
      setProductos(respuesta)
    })
  }, [])
  
  return (
    <div className="bienvenidaBody">
      <h2>{bienvenida}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;