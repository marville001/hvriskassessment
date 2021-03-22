import React from "react";
import {  Card, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Make = () => {
  const { makes } = useSelector((state) => state.sessionReducer);
  // const [open, setOpen] = useState(false);

  return (
    <div>
      <Container style={{ padding: "50px 20px" }}>
        <Row
          style={{ padding: "10px 20px 10px 0px" }}
          className="justify-content-between"
        >
          <Col sm="2">
            {" "}
            <h4>Make</h4>
          </Col>
          {/* <Button onClick={() => setOpen(true)}>Add Make</Button> */}
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
                    </tr>
                  </thead>
                  <tbody>
                    {makes.map((make, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{make}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Make;
