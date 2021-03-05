import React from "react";
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
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "10vh" }}>
        <div className="session-button-container">
          <Button
            className="session-button"
            // style={{ width: "150px" }}
            variant="primary"
            type="submit"
          >
            Start Session
          </Button>
        </div>
        <Container>
          <Row>
            <CountCard name="All Sessions" count={30} countColor="crimson" />
            <CountCard name="Ongoing Sessions" count={1} countColor="green" />
            <CountCard name="Paused Sessions" count={2} countColor="yellow" />
            <CountCard
              name="Terminated Sessions"
              count={4}
              countColor="red"
            />
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
