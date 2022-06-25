import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Components.css";

function NavbarMain() {
  const navigate = useNavigate();

  return (
    <div className="navbar-ParentDiv">
      <div className="navbar-ChildDiv">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Select Car</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/product");
                  }}
                >
                  Product
                </Nav.Link>
                <Nav.Link
                  href="#features"
                  onClick={() => {
                    navigate("/features");
                  }}
                >
                  Features
                </Nav.Link>
                <Nav.Link disabled href="#pricing"></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarMain;
