import React from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addRPartyDetails } from "../../_actions";
const ResponsibleParty = (props) => {
  const dispatch = useDispatch();
  const { rpartyererror } = useSelector((state) => state.sessionReducer);
  const {
    activeStep,
    rpname,
    rpnumber,
    policy,
    cNumber,
    rpaddress,
    insprovider,
    setRPName,
    setRPNumber,
    setPolicy,
    setCNumber,
    setRPAddress,
    setIProvider,
    changeSessionState,
  } = props;
  const formSubmit = (e) => {
    e.preventDefault();

    const rparty = {
      rpname,
      rpnumber,
      policy,
      cnumber: cNumber,
      rpaddress,
      insprovider
    };

    dispatch(addRPartyDetails(rparty))


    changeSessionState(activeStep + 1, "ongoing");
  };
  return (
    <Container>
      <h5 className="text-center p-2">Responsible Party Information</h5>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={12} lg={8}>
          <Form autoComplete={false}>
          {rpartyererror && (
              <p className="text-center text-danger">{rpartyererror}</p>
            )}
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={rpname} onChange={e=>setRPName(e.target.value)} type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control value={rpnumber} onChange={e=>setRPNumber(e.target.value)} type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control value={rpaddress} onChange={e=>setRPAddress(e.target.value)} type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Insurance Provider</Form.Label>
                  <Form.Control value={insprovider} onChange={e=>setIProvider(e.target.value)} type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Policy #</Form.Label>
                  <Form.Control value={policy} onChange={e=>setPolicy(e.target.value)} type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Claim number</Form.Label>
                  <Form.Control value={cNumber} onChange={e=>setCNumber(e.target.value)} type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Button
                    className="btn-block"
                    // style={{ width: "150px" }}
                    onClick={formSubmit}
                    variant="primary"
                    type="submit"
                  >
                    Continue
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResponsibleParty;
