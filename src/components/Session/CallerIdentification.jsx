import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const CallerIdentification = ({ activeStep, setActiveStep }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);
  };
  return (
    <Container>
      <h5 className="text-center p-2">Caller Details</h5>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={12} lg={8}>
          <Form autoComplete={false}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Personal Contact Number</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Current Location</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Organization</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Organization Address</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Organization Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Supervisor</Form.Label>
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

export default CallerIdentification;
