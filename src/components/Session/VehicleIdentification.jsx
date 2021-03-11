import React from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
const VehicleIdentification = ({ activeStep, setActiveStep }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);
  };
  return (
    <Container fluid>
      <h4 className="text-center p-2">Vehicle Identification</h4>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={12} lg={12}>
          <Form autoComplete={false}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Make</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Model</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Year</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Vin</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>LP State</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Licence Plate</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Button
                    className="btn-block"
                    // style={{ width: "150px" }}
                    onClick={formSubmit}
                    variant="primary"
                    type="submit"
                  >
                    Continue
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleIdentification;
