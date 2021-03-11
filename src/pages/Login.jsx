/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { userLogin } from "../_actions/userActions";

const Login = (props) => {
  const { loading, user, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userObj = {
    email,
    password,
  };

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (user._id) {
      props.history.push(redirect);
    }
    return () => {};
  }, [user]);

  const formSubmit = (e) => {
    e.preventDefault();
    
    dispatch(userLogin(userObj))
    setEmail("")
    setPassword("")
  };

  return (
    <Container>
      <Row className="form_container">
        <Col className="form_wrapper" sm={12} md={6} xl={4}>
          <h5 className="text-center p-3">Welcome Back. Please Login</h5>
          {loading && <div className="text-center" >Loading...</div>}
          {/* {error && <div className={styles.errorContainer}>{error}</div>} */}
          {error && <div className="text-center text-danger">{error}</div>}
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
                className="btn-block"
                // style={{ width: "150px" }}
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
