import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <img  src={producto.img}  alt={producto.nombre}/>
        <p>{producto.nombre}</p>
        <p>{producto.precio} </p>
    </div>
  )
}

export default ItemDetail