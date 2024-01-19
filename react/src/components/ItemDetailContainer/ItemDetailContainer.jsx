import React, { useEffect, useState } from "react";
import obtenerProductos from "../Data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        const filtro = respuesta.find((producto) => producto.id === 1);
        setProducto(filtro);
      })
      .finally(() => console.log("fin"));
  }, []);

  return <div>
    <ItemDetail producto={producto}/>
  </div>;
};

export default ItemDetailContainer;
