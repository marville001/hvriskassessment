import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ExportCSV } from "../lib/ExportCSV";
// import { loadtable } from "../lib/loadTable";

const Sessions = () => {
  const { sessions, callers, employees } = useSelector(
    (state) => state.adminReducer
  );

  const getDates = (string) => {
    const date = new Date(string);
    const datestring =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

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

  const getData = () => {
    const tableRows = [];

    sessions.forEach((session) => {
      const emp = employees.filter(
        (e) => e.idnumber === session.employeenumber
      )[0];

      const cal = callers.filter((c) => c.sessionid === session._id)[0];
      console.log(cal);
      const data = [
        session._id,
        getDates(session.date),
        getTime(session.date),
        session.state,
        session.employeenumber,
        emp.name,
        emp.email,
        emp.phone,
        cal?cal.name:"",
        cal?cal.email:"",
        cal?cal.number:"",
      ];

      tableRows.push(data);
    });

    return tableRows;
  };

  console.log(getData());

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
            <ExportCSV csvData={getData()} fileName={"sessions"} />
            {/* <Button>Export</Button> */}
          </Row>
          <Row>
            <Table responsive>
              <thead style={{ backgroundColor: "#233030", color: "#fff" }}>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>Time</th>
                  <th>State</th>
                  <th>Agent ID</th>
                   <th>Agent Name</th>
                  <th>Agent email</th>
                  <th>Agent Number</th>
                  <th>Caller Name</th>
                  <th>Caller email</th>
                </tr>
              </thead>
              <tbody>
                {/* {sessions.map((s, i) => (
                  <tr key={s._id}>
                    <td>{i + 1}</td>
                    <td>{s._id.slice(0,3)+"..."+s._id.slice(s._id.length-3, s._id.length+1)}</td>
                    <td>{getDates(s.date)}</td>
                    <td>{getTime(s.date)}</td>
                    <td>{s.employeenumber}</td>
                    <td>{s.state}</td>
                    {/* <td>Name</td>
                      <td>Email</td>
                      <td>KKK</td>
                      <td>GGG</td>
                      <td>yyy</td>
                      <td>40</td> */}
                  {/* </tr> */}
                {/* ))} */}
                {getData().map((data,i)=>(<tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data[0].slice(0,3)+"..."+data[0].slice(data[0].length-3, data[0].length+1)}</td>
                  <td>{data[1]}</td>
                  <td>{data[2]}</td>
                  <td>{data[3]}</td>
                  <td>{data[4]}</td>
                  <td>{data[5].split(" ")[0]}</td>
                  <td>{data[6].slice(0,3)+"...@gmail.com"}</td>
                  <td>{data[7]}</td>
                  <td>{data[8]}</td>
                  <td>{data[9]}</td>
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
