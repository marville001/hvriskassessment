/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import NavBar from "../components/Navbar";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createSession } from "../_actions";
const CountCard = ({ name, count, countColor }) => {
  return (
    <Col xs={12} md={3} lg={3} className="my-3">
      <Card>
        <Card.Body>
          <h5 className="text-center">{name}</h5>
          <h4
            className="text-center"
            style={{ color: countColor ? countColor : "black" }}
          >
            {count}
          </h4>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Home = (props) => {
  const { user } = useSelector((state) => state.userReducer);
  const { session, loading } = useSelector((state) => state.sessionReducer);
  const dispatch = useDispatch();

  const createSessionSubmit = () => {
    const sessionObj = {
      employeenumber: "343434343",
      date: Date(),
      state: "ongoing",
      step: 0,
    };
    dispatch(createSession(sessionObj));

    if (!loading) props.history.push(`/session/${session._id}`);
  };

  useEffect(() => {
    if (!user._id) {
      props.history.push("/login");
    }
  }, [user]);

  return (
    <>
      <NavBar />
      <div style={{ marginTop: "10vh" }}>
        <div className="session-button-container">
          <Button
            className="session-button"
            disabled={loading ? true : false}
            variant="primary"
            type="submit"
            onClick={createSessionSubmit}
          >
            {loading ? "Loading...." : "Start Session"}
          </Button>
        </div>
        <Container>
          <Row>
            <CountCard name="All Sessions" count={30} countColor="crimson" />
            <CountCard name="Ongoing Sessions" count={1} countColor="green" />
            <CountCard name="Paused Sessions" count={2} countColor="yellow" />
            <CountCard name="Terminated Sessions" count={4} countColor="red" />
          </Row>
        </Container>
        <Container>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
              marginBottom: "15px",
            }}
          >
            <Col xs={12} sm={8} lg={6}>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Search by..."
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="btnGroupAddon">Search</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col xs={12} sm={4} lg={4}>
              <Form.Control as="select">
                <option>All Sessions</option>
                <option>Paused Sessions</option>
                <option>Ongoing Sessions</option>
                <option>Terminatd Session</option>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Session Id</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
