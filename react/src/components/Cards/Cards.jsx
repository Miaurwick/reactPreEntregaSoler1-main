import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="contenedor-card">
      <Card style={{ width: "18rem", margin: "4em" }}>
        <Card.Img variant="top" src="./src/assets/Semillas_de_ajo.png" />
        <Card.Body>
          <Card.Title className="titulo-card">Semillas de ajo</Card.Title>
          <Card.Text className="texto-card">
            Añade un toque punzante y maravilloso a los platos.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="precio-producto-card">$ 10 USD</ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Conoce más </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: "4em" }}>
        <Card.Img variant="top" src="./src/assets/Semillas_de_chirivia.png" />
        <Card.Body>
          <Card.Title className="titulo-card">Semillas de Chirivía</Card.Title>
          <Card.Text className="texto-card">
            Un tubérculo de primavera primo hermano de la zanahoria.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="precio-producto-card">$ 15 USD</ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Conoce más </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: "4em" }}>
        <Card.Img variant="top" src="./src/assets/Semillas_de_coliflor.png" />
        <Card.Body>
          <Card.Title className="titulo-card">Semillas de Coliflor</Card.Title>
          <Card.Text className="texto-card">
            Valiosa, pero de crecimiento lento y de vuenos nutrientes.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="precio-producto-card">$ 45 USD</ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Conoce más </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: "4em" }}>
        <Card.Img variant="top" src="./src/assets/Semillas_de_fresa.png" />
        <Card.Body>
          <Card.Title className="titulo-card">Semillas de Fresa</Card.Title>
          <Card.Text className="texto-card">
            Una fruta dulce, jugosa y de atractivo color rojo, muy apreciada.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="precio-producto-card">$ 30 USD</ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Conoce más </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: "4em" }}>
        <Card.Img variant="top" src="./src/assets/Semillas_de_cafe.png" />
        <Card.Body>
          <Card.Title className="titulo-card">Semillas de Café</Card.Title>
          <Card.Text className="texto-card">
            Plántalo en verano para tener un cafeto.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="precio-producto-card">$ 25 USD</ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Conoce más </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: "4em" }}>
        <Card.Img variant="top" src="./src/assets/Semillas_de_patata.png" />
        <Card.Body>
          <Card.Title className="titulo-card">Brote de Patata</Card.Title>
          <Card.Text className="texto-card">
            Un tubérculo cultivado en muchas zonas.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="precio-producto-card">$ 18 USD</ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Conoce más </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;