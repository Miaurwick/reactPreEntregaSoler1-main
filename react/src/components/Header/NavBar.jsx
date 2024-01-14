import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CarritoCartWidget/CartWidget";

const NavBar = () => {
  return (
    <div id="container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand id="brand" href="">
            Maldad Miaulactica 🌌
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="estaciones me-auto">
              <Nav.Link id="primavera" href="#primavera">
                Primavera
              </Nav.Link>
              <Nav.Link id="verano" href="#verano">
                Verano
              </Nav.Link>
              <Nav.Link id="otonio" href="#otonio">
                Otoño
              </Nav.Link>
              <Nav.Link id="invierno" href="#otonio">
                Invierno
              </Nav.Link>
              <Nav.Link id="otonio" href="#otonio">
                <CartWidget contador={"(1)"} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
