import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const CallerIdentification = () => {
  return (
    <Container>
      <h5 className="text-center p-2">Caller Details</h5>
      <Row style={{display: "flex", justifyContent: "center"}}>
        <Col md={4} >
          <Form autoComplete={false}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Personal Contact Number
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Email
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
              Current Location
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group>
              <Form.Label>
              Organization
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group>
              <Form.Label>
              Organization Address
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
              Organization Phone Number
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group>
              <Form.Label>
              Supervisor
              </Form.Label>
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

export default CallerIdentification;
