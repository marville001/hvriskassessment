/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCaller, updateCaller } from "../../_actions";

const CallerIdentification = (props) => {
  const {
    number,
    name,
    email,
    sup,
    oa,
    on,
    loc,
    org,
    setName,
    setNumber,
    setEmail,
    setSupervisor,
    setOAddress,
    setONumber,
    setLocation,
    setOrganization,
    sessionId,
    changeSessionState,
  } = props;
  const dispatch = useDispatch();
  const { callererror } = useSelector((state) => state.sessionReducer);
  const { caller } = useSelector((state) => state.callerReducer);

  useEffect(() => {
    if (caller._id) {
      setName(caller.name);
      setNumber(caller.number);
      setEmail(caller.email);
      setSupervisor(caller.supervisor);
      setOrganization(caller.organization);
      setOAddress(caller.organization_address);
      setONumber(caller.organization_number);
      setLocation(caller.location);
    }
  }, [caller]);

  const formSubmit = (e) => {
    e.preventDefault();

    const c = {
      name,
      sessionid: sessionId,
      number,
      email,
      supervisor: sup,
      organization_address: oa,
      organization_number: on,
      location: loc,
      organization: org,
    };

    dispatch(addCaller(c));

    changeSessionState(2, "ongoing");
  };

  const callerUpdate = () => {
    const c = {
      name,
      sessionid: sessionId,
      number,
      email,
      supervisor: sup,
      organization_address: oa,
      organization_number: on,
      location: loc,
      organization: org,
    };

    dispatch(updateCaller(c, caller._id));
  };
  return (
    <Container fluid>
      <h5 className="text-center p-2">Caller Details</h5>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={12} lg={12}>
          <Form autoComplete={false}>
            {callererror && (
              <p className="text-center text-danger">{callererror}</p>
            )}
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required={true}
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Personal Contact Number</Form.Label>
                  <Form.Control
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Current Location</Form.Label>
                  <Form.Control
                    value={loc}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Organization</Form.Label>
                  <Form.Control
                    value={org}
                    onChange={(e) => setOrganization(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Organization Address</Form.Label>
                  <Form.Control
                    value={oa}
                    onChange={(e) => setOAddress(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Organization Phone Number</Form.Label>
                  <Form.Control
                    value={on}
                    onChange={(e) => setONumber(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Supervisor</Form.Label>
                  <Form.Control
                    value={sup}
                    onChange={(e) => setSupervisor(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  {!caller._id ? (
                    <Button
                      className="btn-block"
                      onClick={formSubmit}
                      variant="primary"
                      type="submit"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      className="btn-block"
                      onClick={callerUpdate}
                      variant="primary"
                      type="button"
                    >
                      Update
                    </Button>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CallerIdentification;
