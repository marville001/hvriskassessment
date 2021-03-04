import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row className="form_container">
        <Col className="form_wrapper" sm={12} md={6} xl={4}>
          <h5 className="text-center p-3">Welcome Back. Please Login</h5>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Email address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Password<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="*******"
              />
              <Form.Text className="text-muted">Atleast 6 characters</Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Button
                style={{ width: "150px" }}
                onClick={formSubmit}
                variant="primary"
                type="submit"
              >
                Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
