import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAdmin, addEmployee } from "../../../_actions";
import { ExportCSV } from "../lib/ExportCSV";

const Users = () => {
  const { admins, employees, addloading, adderror } = useSelector(
    (state) => state.adminReducer
  );
  const dispatch = useDispatch();
  const [ashow, setAShow] = useState(false);
  const [eshow, setEShow] = useState(false);

  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empId, setEmpId] = useState("");
  const [empPassword, setEmpPassword] = useState("");
  const [empPhone, setEmpPhone] = useState("");
  const [empAddress, setEmpAddress] = useState("");

  const handleAddAdminShow = () => setAShow(true);
  const handleAdminClose = () => {
    setAShow(false);
    setAdminName("");
    setAdminEmail("");
    setAdminPassword("");
  };

  const handleAddEmployeeShow = () => setEShow(true);
  const handleEmployeeClose = () => {
    setEShow(false);
    setEmpName("");
    setEmpEmail("");
    setEmpPassword("");
    setEmpId("");
    setEmpPhone("");
    setEmpAddress("");
  };

  const handleAddEmployee = () => {
    dispatch(
      addEmployee({
        name: empName,
        idnumber: empId,
        email: empEmail,
        password: empPassword,
        phone: empPhone,
        address: empAddress,
      })
    );
    setEShow(false);
  };

  const handleAddAdmin = () => {
    dispatch(
      addAdmin({ name: adminName, email: adminEmail, password: adminPassword })
    );
    setAShow(false);
  };

  return (
    <div>
      <Container style={{ padding: "20px 0px 0px" }}>
        {/* Admins */}
        <Row
          style={{ padding: "10px 20px 10px 0px" }}
          className="justify-content-between"
        >
          <Col sm="2">
            {" "}
            <h4>Admins</h4>
          </Col>
          <Button onClick={handleAddAdminShow}>Add Admin</Button>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Card>
              <Card.Body>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map((admin, i) => (
                      <tr key={admin._id}>
                        <td>{i + 1}</td>
                        <td>{admin.name}</td>
                        <td>{admin.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Admin Modal */}
        <Modal show={ashow} onHide={handleAdminClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {adderror && (
              <h6 className="text-danger text-center">{adderror}</h6>
            )}
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Name<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Email address<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  type="email"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Password<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  type="password"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAdminClose}>
              Close
            </Button>
            <Button
              variant="primary"
              disabled={addloading ? true : false}
              onClick={handleAddAdmin}
            >
              {addloading ? "Loading..." : "Add Admin"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      <Container style={{ padding: "50px 0px" }}>
        <Row
          style={{ padding: "10px 20px 10px 0px" }}
          className="justify-content-between"
        >
          <Col sm="2">
            {" "}
            <h4>Employees</h4>
          </Col>
          <Col sm="4">
            <Button onClick={handleAddEmployeeShow}>Add User</Button>
            <ExportCSV csvData={employees} fileName={"employees"}/>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Card>
              <Card.Body>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Employee ID</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee, i) => (
                      <tr key={employee._id}>
                        <td>{i + 1}</td>
                        <td>{employee.name}</td>
                        <td>{employee.idnumber}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/*Employee Modal */}
        <Modal show={eshow} onHide={handleEmployeeClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {adderror && (
              <h6 className="text-danger text-center">{adderror}</h6>
            )}
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Name<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={empName}
                  onChange={(e) => setEmpName(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Email<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={empEmail}
                  onChange={(e) => setEmpEmail(e.target.value)}
                  type="email"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Employee ID<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Address<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={empAddress}
                  onChange={(e) => setEmpAddress(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Cell Phone Number<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={empPhone}
                  onChange={(e) => setEmpPhone(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Password<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={empPassword}
                  onChange={(e) => setEmpPassword(e.target.value)}
                  type="password"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEmployeeClose}>
              Close
            </Button>
            <Button
              variant="primary"
              disabled={addloading ? true : false}
              onClick={handleAddEmployee}
            >
              {addloading ? "Loading..." : "Add Employee"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Users;
