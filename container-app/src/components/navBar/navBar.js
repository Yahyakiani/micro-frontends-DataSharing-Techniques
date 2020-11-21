import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Micro Frontends</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/time">Time</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)