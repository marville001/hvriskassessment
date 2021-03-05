import React from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
const VehicleIdentification = () => {
  return (
    <Container>
      <h5 className="text-center p-2">Vehicle Identification</h5>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={4}>
          <Form autoComplete={false}>
            <Form.Group>
              <Form.Label>Make</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Vin</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group>
              <Form.Label>LP State</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Licence Plate</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group>
              <Button
                className="btn-block"
                // style={{ width: "150px" }}
                // onClick={formSubmit}
                variant="primary"
                type="submit"
              >
                Continue
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleIdentification;
