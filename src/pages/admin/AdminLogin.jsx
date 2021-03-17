import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../_actions";

const AdminLogin = () => {
  const dispatch = useDispatch()
  const {admin, loading, error} = useSelector(state=>state.adminReducer);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    dispatch(adminLogin({email,password}));
  };



  return (
    <div className="admin-login-container" style={{display: admin._id?"none":"flex"}}>
      <Form>
        <h3 className="text-center">Admin Login</h3>
        {error && <p className="text-danger">{error}</p>}
        {loading && <p className="text-center">Loading...</p>}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>
            Email address<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
          />
        </Form.Group>
        <Button  onClick={handleLoginSubmit} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default AdminLogin;
