import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/">Álbum Cande & Mateo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Ciudades" id="ciudades-dropdown">
              <NavDropdown.Item href="/paris">París</NavDropdown.Item>
              <NavDropdown.Item href="/niza">Niza</NavDropdown.Item>
              <NavDropdown.Item href="/toulouse">Toulouse</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/todas">Ver todas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
