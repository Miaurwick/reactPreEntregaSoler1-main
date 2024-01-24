import React from "react";

const ItemDetail = ({producto}) => {
    console.log(producto)
  return (
    <div>
      <p>{producto.nombre}</p>
    </div>
  )
}

export default ItemDetail