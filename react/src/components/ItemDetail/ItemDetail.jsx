import React, { useState } from "react";
import "./ItemDetail.css"
import ContadorProducto from "../ContadorProducto/ContadorProducto";
import { Link } from "react-router-dom";
const ItemDetail = ({producto}) => {

  const [toggle, setToggle] = useState(false)

  const añadirProducto = (contador) =>{
    setToggle(true)
    const productoCarrito = {...producto, cantidad:  contador}
    console.log(productoCarrito)
  }
  return (
    <div>
      <img className="imagenDetallada" src={producto.imagen} alt="" />
      <p className="nombreDetallado" >{producto.nombre}</p>
      <p className="descripcionDetallada">{producto.descripcion} </p>
      <p className="precioDetallado">${producto.precio} </p>
      {
        toggle ? (
          <Link to = "/CarritoCardWidget">Ir al carrito</Link>
        ) : ( <ContadorProducto stock={10} añadirProducto={añadirProducto}/>)
      }
    </div>
  )
}

export default ItemDetail