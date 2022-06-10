import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';


function NavbarMain() {
  return (
    <div className="navbar-ParentDiv">
          <div className="navbar-ChildDiv">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Select My Car</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#pricing">Camparison</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link disabled href="#pricing">Camparison</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </div>
    </div>
  );
}

export default NavbarMain