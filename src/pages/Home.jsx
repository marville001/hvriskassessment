/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Wrapper from "../components/Wrapper";
import {
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
const CountCard = ({ name, count, countColor }) => {
  return (
    <Col style={{margin:"1px"}} xs={12} md={6} lg={4} xl={3}  className="my-3 mx-2">
      <Card style={{width: "200px", padding:"5px"}}>
        <Card.Body>
          <h5 style={{fontSize: "16px"}} className="text-center">{name}</h5>
          <h4
            className="text-center"
            style={{ color: countColor ? countColor : "black",fontWeight:"bold",fontSize:"30px" }}
          >
            {count}
          </h4>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Home = () => {
  const { sessions} = useSelector(
    (state) => state.sessionReducer
  );

  const ongoingSessions = sessions.filter(session=>session.state==="ongoing");
  const pausedSessions = sessions.filter(session=>session.state==="paused");
  const endedSessions = sessions.filter(session=>session.state==="ended");
  
  return (
    <Wrapper>
      <div>        
        <Container>
          <Row>
            <CountCard
              name="All Sessions"
              count={sessions.length}
              countColor="crimson"
            />
            <CountCard name="Ongoing Sessions" count={ongoingSessions.length} countColor="green" />
            <CountCard name="Paused Sessions" count={pausedSessions.length} countColor="yellow" />
            <CountCard name="Terminated Sessions" count={endedSessions.length} countColor="red" />
          </Row>
        </Container>

      </div>
    </Wrapper>
  );
};

export default Home;
