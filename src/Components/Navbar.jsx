import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default class Navbarcom extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >Maybell</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">    
              <Nav className="me-auto">
                <Nav.Link href="#homepage" as={Link} to="/Homepage">Home</Nav.Link>
                <Nav.Link href="#login"as={Link} to="/login">Login</Nav.Link>
                <Nav.Link href="#registration" as={Link} to="/registration">Registration</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}