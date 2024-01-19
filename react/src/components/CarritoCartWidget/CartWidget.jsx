import React from "react";
import "./CartWidget.css";

const cartWidget = ({ contador }) => {
  return (
    <div id="carrito">
      <img src="./public/img/Coffee.ico" alt="iconoCarrito" />
      <p>{contador}</p>
    </div>
  );
};

export default cartWidget;
