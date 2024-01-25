import React from "react";
import "./ItemDetail.css"
const ItemDetail = ({producto}) => {
  return (
    <div>
      <img className="imagenDetallada" src={producto.imagen} alt="" />
      <p className="nombreDetallado" >{producto.nombre}</p>
      <p className="descripcionDetallada">{producto.descripcion} </p>
      <p className="precioDetallado">${producto.precio} </p>
    </div>
  )
}

export default ItemDetail