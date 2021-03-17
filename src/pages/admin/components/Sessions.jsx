import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

const Sessions = () => {
  return (
    <Container style={{ padding: "8px" }} fluid>
      <Card>
        <Card.Body>
          <Row
            style={{ padding: "10px 20px 10px 0px" }}
            className="justify-content-between"
          >
            <Col xs="6">
              <h4>Sessions</h4>
            </Col>
            <Button>Export</Button>
          </Row>
          <Row>
            <Table responsive>
              <thead style={{backgroundColor:"#233030", color:"#fff"}}>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>Employee ID</th>
                  <th>State</th>
                  <th>Caller Name</th>
                  <th>Caller email</th>
                  <th>Hazard Assessment Level</th>
                  <th>Vehicle Damage Level</th>
                  <th>Hazard Damage Level</th>
                  <th>Uploads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>

                  {Array.from({ length: 10 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>2</td>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Sessions;
