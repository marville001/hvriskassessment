import React from "react";
import { Container, Col } from "react-bootstrap";
const SubNavbar = () => {
  return (
    <Col sm={12}>
      <Container className="subnavbar-container">
        <p style={{fontWeight: "normal", coloe:"#eee", fontSize:"24px"}}>Home / Dashboard</p>
      </Container>
    </Col>
  );
};

export default SubNavbar;
