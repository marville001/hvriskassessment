import React from 'react'

import { Button, Col, Container, Form, Row } from "react-bootstrap";
const ResponsibleParty = () => {
    return (
        <Container>
      <h5 className="text-center p-2">Responsible Party Information</h5>
      <Row style={{display: "flex", justifyContent: "center"}}>
        <Col md={4} >
          <Form autoComplete={false}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Phone Number
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Address
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
              Insurance Provider
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group>
              <Form.Label>
              Policy #
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group>
              <Form.Label>
              Claim number
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
    )
}

export default ResponsibleParty
