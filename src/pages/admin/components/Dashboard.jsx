import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CountCard = ({ name, count, countColor }) => {
  return (
    <Col style={{ margin: "1px" }} sm={6} md={4} lg={3} xl={2} className="mt-3">
      <Card style={{ padding: "5px" }}>
        <Card.Body>
          <h5 style={{ fontSize: "15px" }} className="text-center">
            {name}
          </h5>
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

const Dashboard = () => {
  const { admins, employees } = useSelector((state) => state.adminReducer);
  const {sessions} = useSelector(state=>state.sessionReducer);
  const ongoingSessions = sessions.filter(session=>session.state==="ongoing");
  const pausedSessions = sessions.filter(session=>session.state==="paused");
  const endedSessions = sessions.filter(session=>session.state==="ended");
  // const ongoingSessions = sessions.filter(session=>session.state==="ongoing");
  console.log(sessions);
  return (
    <div>
      <h4 style={{ padding: "20px 100px" }}>Dashboard</h4>
      <Container fluid>
        <Row className="justify-content-center">
          <CountCard name="All Sessions" count={sessions.length} />
          <CountCard name="All Employees" count={employees.length} />
          <CountCard name="All Admins" count={admins.length} />
          <CountCard name="Ongoing Sessions" count={ongoingSessions.length} />
          <CountCard name="Paused Sessions" count={pausedSessions.length} />
          <CountCard name="Ended Sessions" count={endedSessions.length} />
        </Row>
        <Row>
          <Card style={{width: "100%", minHeight:"200px"}}>
            <Card.Body>
              <h4>Graphical diagrams</h4>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
