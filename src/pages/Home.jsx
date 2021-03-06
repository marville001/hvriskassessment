/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
  Spinner,
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

const Home = () => {
  const { session, sessions, loading } = useSelector(
    (state) => state.sessionReducer
  );
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [sessionMsg, setSessionMsg] = useState("");

  const createSessionSubmit = () => {
    const sessionObj = {
      employeenumber: user.idnumber,
      date: Date(),
      state: "ongoing",
      step: 0,
    };
    dispatch(createSession(sessionObj));
  };

  useEffect(() => {
    if (session._id) {
      if (session.state === "ongoing") {
        setSessionMsg("You currently have an ongoing session");
      } else if (session.state === "paused") {
        setSessionMsg("You have a temporarily paused session");
      } else {
        setSessionMsg("");
      }
    }
  }, [session]);

  return (
    <>
      <NavBar />
      <div style={{ marginTop: "10vh" }}>
        <div className="session-button-container">
          {session._id && session.state === "ongoing" ? (
            <Button
              className="session-button"
              href={`/session/${session._id}`}
              onClick={createSessionSubmit}
            >
              {"Go to Session"}
            </Button>
          ) : (
            <Button
              className="session-button"
              disabled={loading ? true : false}
              variant="primary"
              type="submit"
              onClick={createSessionSubmit}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </>
              ) : (
                "Start New Session"
              )}
            </Button>
          )}
          {sessionMsg && <p>{sessionMsg}</p>}
        </div>
        <Container>
          <Row>
            <CountCard
              name="All Sessions"
              count={sessions.length}
              countColor="crimson"
            />
            <CountCard name="Ongoing Sessions" count={1} countColor="green" />
            <CountCard name="Paused Sessions" count={2} countColor="yellow" />
            <CountCard name="Terminated Sessions" count={1} countColor="red" />
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
                    <th colSpan={2}>Date/Time</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session, index) => (
                    <tr>
                      <td>{index+1}</td>
                      <td>{session._id}</td>
                      <td colSpan={2}>{session.date}</td>
                      <td>{session.state}</td>
                    </tr>
                  ))}
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
