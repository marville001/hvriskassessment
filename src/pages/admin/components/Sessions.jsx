import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ExportCSV } from "../lib/ExportCSV";
// import { loadtable } from "../lib/loadTable";

const Sessions = () => {
  const { sessions} = useSelector(
    (state) => state.adminReducer
  );

  const getDate= (string)=>{
    const date = new Date(string);
    const datestring = date.getDate() +"-"+(date.getMonth()+1)+ "-"+date.getFullYear()

    return datestring;
}

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
            <ExportCSV csvData={sessions} fileName={"sessions"}/>
            {/* <Button>Export</Button> */}
          </Row>
          <Row>
            <Table responsive>
              <thead style={{ backgroundColor: "#233030", color: "#fff" }}>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>Employee ID</th>
                  <th>State</th>
                  {/* <th>Caller Name</th>
                  <th>Caller email</th>
                  <th>Hazard Assessment Level</th>
                  <th>Vehicle Damage Level</th>
                  <th>Hazard Damage Level</th>
                  <th>Uploads</th> */}
                </tr>
              </thead>
              <tbody>

                {sessions.map((s,i)=>(
                  <tr key={s._id}>
                      <td>{i+1}</td>
                      <td>{s._id}</td>
                      <td>{getDate(s.date)}</td>
                      <td>{s.employeenumber}</td>
                      <td>{s.state}</td>
                      {/* <td>Name</td>
                      <td>Email</td>
                      <td>KKK</td>
                      <td>GGG</td>
                      <td>yyy</td>
                      <td>40</td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Sessions;
