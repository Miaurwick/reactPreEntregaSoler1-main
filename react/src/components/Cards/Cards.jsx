import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ( {producto}) => {
  return (
    <div className="contenedor-card" style={{ display: "inline-flex" }}>
      <Card  style={{ width: "18rem", margin: "5em" }}>
      <Link  className="verMas" to={`/detalle/${producto.id}`}><Card.Img variant="top" src={producto.imagen} /></Link>
        <Card.Body>
          <Card.Title className="titulo-card">{producto.nombre}</Card.Title>
          <Card.Text className="texto-card">
            {producto.descripcion}
          </Card.Text>
          <ListGroup.Item className="precio-producto-card">$ {producto.precio}</ListGroup.Item>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cards;
