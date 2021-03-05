import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {Navbar, Nav, NavDropdown,} from 'react-bootstrap'
import { logoutUser } from "../_actions/userActions";

const NavBar = () => {
  const {user:{name,email}} = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()

  return (
    <Navbar className="app_navbar" fixed="top" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/">Employee Responder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav >
        <Nav>
          <NavDropdown title={"Profile"} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">{email}</NavDropdown.Item>
            
            <NavDropdown.Item onClick={()=>dispatch(logoutUser())}>Log out</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="text-primary">Welcome {name}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
