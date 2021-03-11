import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { logoutUser } from "../_actions/userActions";

const NavBar = () => {
  const {
    user: { name, email },
  } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <Col sm={12} style={{padding:"0px"}}>
      <Navbar
        className="app_navbar"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="/" style={{marginLeft:"55px"}}><h5>Dashboard</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><h5>Home</h5></Nav.Link>
            <Nav.Link href="/sessions"><h5>Sessions</h5></Nav.Link>
            <Nav.Link href="/profile"><h5>Profile</h5></Nav.Link>
          </Nav>
          <Nav style={{marginRight: "20px"}}>
            <NavDropdown title={"Profile"} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{email}</NavDropdown.Item>

              <NavDropdown.Item onClick={() => dispatch(logoutUser())}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-primary">{name}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default NavBar;
