import React from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
const ResponsibleParty = ({ activeStep, setActiveStep }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);
  };
  return (
    <Container>
      <h5 className="text-center p-2">Responsible Party Information</h5>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={12} lg={8}>
          <Form autoComplete={false}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Insurance Provider</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Policy #</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Claim number</Form.Label>
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

export default ResponsibleParty;
