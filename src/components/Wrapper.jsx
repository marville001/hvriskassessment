import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import NavBar from "./Navbar";
import SubNavbar from "./SubNavbar";
import Sidebar from "./Sidebar";

const Wrapper = ({children}) => {
  return (
    <Row>
      <NavBar />
      <SubNavbar />
      <Col sm={12}>
        <Container>
          <Row>
            <Sidebar/>
            <Col md={9} style={{minWidth:"600px"}} className="main-container">
              {children}
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Wrapper;
