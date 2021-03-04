import React from "react";

import {Navbar, Nav, NavDropdown,} from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar className="app_navbar" fixed="top" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/">Employee Responder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav >
        <Nav>
          <NavDropdown title={"Profile"} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Martin Mwangi Wanjiku</NavDropdown.Item>
            
            <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="text-primary">Welcome Martin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
