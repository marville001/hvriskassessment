/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../components/Wrapper";
import { updateEmployee } from "../_actions";

const EmployeeProfile = () => {
  const dispatch = useDispatch()
  const { user, updateerror,updateloading } = useSelector((state) => state.userReducer);

  const [eName, setEName] = useState("");
  const [ePhone, setEPhone] = useState("");
  const [eAddress, setEAddress] = useState("");

  const [ashow, setAShow] = useState(false);
  const handleEditModalOpen = () => setAShow(true);
  const handleEditModalClose = () => {
    setEName("");
    setEPhone("");
    setEAddress("");
    setAShow(false)
  };
  const { email, name, idnumber, address, phone } = user;

  useEffect(() => {
    setEName(name);
    setEAddress(address);
    setEPhone(phone);
  }, [user]);

  const updateEmployeeSubmit = () => {
    dispatch(
      updateEmployee({
        name: eName,
        idnumber,
        email,
        phone: ePhone,
        address: eAddress,
      }, user._id)
    );
    if(updateloading === false && updateerror === ""){
      handleEditModalOpen();
    }
  };

  return (
    <Wrapper>
      <h3>Profile</h3>
      <br />
      <Row>
        <Col sm={12}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} disabled type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>ID NUmber</Form.Label>
            <Form.Control value={idnumber} disabled type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} disabled type="name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control value={address} disabled type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control value={phone ? phone : ""} disabled type="email" />
          </Form.Group>
          <Form.Group>
            <Button onClick={handleEditModalOpen} type="button" style={{ marginRight: "20px" }}>
              Edit
            </Button>
            {/* <Button type="button">Change Password</Button> */}
          </Form.Group>
        </Col>
      </Row>

      {/* Edit Details Modal */}
      <Modal show={ashow} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {updateerror && (
            <h6 className="text-danger text-center">{updateerror}</h6>
          )}
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control value={email} disabled type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>ID NUmber</Form.Label>
              <Form.Control value={idnumber} disabled type="email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                value={eName}
                onChange={(e) => setEName(e.target.value)}
                type="text"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                value={eAddress}
                onChange={(e) => setEAddress(e.target.value)}
                type="text"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Phone<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                value={ePhone}
                onChange={(e) => setEPhone(e.target.value)}
                type="text"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={updateloading ? true : false}
            onClick={updateEmployeeSubmit}
          >
            {updateloading ? "Loading..." : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};

export default EmployeeProfile;
