import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Cards.css";

const Cards = ( {producto}) => {
  return (
    <div className="contenedor-card" style={{ display: "inline-flex" }}>
      <Card  style={{ width: "18rem", margin: "4em" }}>
        <Card.Img variant="top" src={producto.imagen  } />
        <Card.Body>
          <Card.Title className="titulo-card">{producto.nombre}</Card.Title>
          <Card.Text className="texto-card">
            {producto.descripcion}
          </Card.Text>
          <ListGroup.Item className="precio-producto-card">$ {producto.precio}</ListGroup.Item>
          <Button variant="primary">Conoce más </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cards;
