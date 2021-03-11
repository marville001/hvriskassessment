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
  const { sessions} = useSelector(
    (state) => state.sessionReducer
  );
  
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
            <CountCard name="Ongoing Sessions" count={1} countColor="green" />
            <CountCard name="Paused Sessions" count={2} countColor="yellow" />
            <CountCard name="Terminated Sessions" count={1} countColor="red" />
          </Row>
        </Container>

      </div>
    </Wrapper>
  );
};

export default Home;
