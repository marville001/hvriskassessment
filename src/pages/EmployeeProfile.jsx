import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Wrapper from "../components/Wrapper";

const EmployeeProfile = () => {
  const { user } = useSelector((state) => state.userReducer);

  const { email, name, idnumber } = user;
  return (
    <Wrapper>
      <h3>Profile</h3>
      <br />
      <Row>
        <Col sm={12}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} disabled type="name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} disabled type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>ID NUmber</Form.Label>
            <Form.Control value={idnumber} disabled type="email" />
          </Form.Group>
          <Form.Group>
            <Button type="button">Change Password</Button>
          </Form.Group>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default EmployeeProfile;
