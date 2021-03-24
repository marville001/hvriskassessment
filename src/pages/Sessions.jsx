/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import {
  Button,
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
import {
  changeSessionCount,
  changeSessionKeyword,
  changeSessionState,
  createSession,
  loadAllSessions,
} from "../_actions";

const Sessions = () => {
  const {
    sessions,
    loading,
    loading_all,
    searchby,
    state,
    sessionsCount,
    keyword,
  } = useSelector((state) => state.sessionReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

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
    dispatch(
      loadAllSessions(user.idnumber, sessionsCount, keyword, state, searchby)
    );
  }, [sessionsCount, keyword, state]);

  const getDate = (string) => {
    const date = new Date(string);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.getDate();
    day = day < 10 ? 0 + "" + day : day;
    month = month < 10 ? 0 + "" + month : month;
    const datestring = month + "-" + day + "-" + year;

    return datestring;
  };

  const getTime = (string) => {
    const date = new Date(string);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let z = hours < 12 ? "AM" : "PM";

    const timestring = hours + ":" + minutes + ":" + seconds + " " + z;

    return timestring;
  };

  const [searchWord, setSearchWord] = useState("");

  return (
    <Wrapper>
      <div className="session-button-container">
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
      </div>
      <Container>
        <Row
          style={{
            justifyContent: "space-between",
            marginTop: "30px",
            marginBottom: "15px",
          }}
        >
          <Col xs={2} sm={2}>
            <Form.Control
              onChange={(e) => dispatch(changeSessionCount(e.target.value))}
              as="select"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Form.Control>
          </Col>

          <Col xs={2} sm={3}>
            <Form.Control
              onChange={(e) => dispatch(changeSessionState(e.target.value))}
              as="select"
            >
              <option value="all">All Sessions</option>
              <option value="paused">Paused Sessions</option>
              <option value="ongoing">Ongoing Sessions</option>
              <option value="ended">Ended Session</option>
            </Form.Control>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        >
          <Col xs={6} sm={6}>
            <Col xs={12} style={{ display: "flex", alignItems: "center" }}>
              <span>By</span>
              <Form.Control
                style={{ display: "inline" }}
                onChange={(e) => {}}
                as="select"
              >
                <option value="sessionstate">Session State</option>
                <option value="Ccallername">Caller Name</option>
              </Form.Control>
            </Col>
          </Col>
          <Col xs={6} sm={6}>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search by..."
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
              />
              <InputGroup.Append
                onClick={() => dispatch(changeSessionKeyword(searchWord))}
              >
                <InputGroup.Text id="btnGroupAddon">Search</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Session Id</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Employee Number</th>
                  <th>State</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading_all ? (
                  <tr>
                    <h4>Loading....</h4>
                  </tr>
                ) : (
                  sessions.map((session, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{session._id}</td>
                      <td>{getDate(session.date)}</td>
                      <td>{getTime(session.date)}</td>
                      <td>{session.employeenumber}</td>
                      <td>{session.state}</td>
                      {session.state === "ongoing" && (
                        <td>
                          <Button href={"/session/" + session._id}>
                            Continue
                          </Button>
                        </td>
                      )}
                      {session.state === "paused" && (
                        <td>
                          <Button href={"/session/" + session._id}>
                            Resume
                          </Button>
                        </td>
                      )}
                      {session.state === "ended" && (
                        <td>
                          <Button disabled>Ended</Button>
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Sessions;
