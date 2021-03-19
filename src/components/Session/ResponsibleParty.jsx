/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addRParty, updateRParty } from "../../_actions";
const ResponsibleParty = (props) => {
  const dispatch = useDispatch();
  const { rparty, adderror } = useSelector((state) => state.rpartyReducer);
  const {
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
    sessionId,
  } = props;

  useEffect(() => {
    if (rparty._id) {
      setRPName(rparty.name);
      setRPNumber(rparty.number);
      setPolicy(rparty.policy);
      setCNumber(rparty.claim_number);
      setRPAddress(rparty.address);
      setIProvider(rparty.insuranceprovider);
    }
  }, [rparty]);

  const formSubmit = (e) => {
    e.preventDefault();

    const rp = {
      name: rpname,
      number: rpnumber,
      sessionid: sessionId,
      policy,
      claim_number: cNumber,
      address: rpaddress,
      insuranceprovider: insprovider,
    };
    dispatch(addRParty(rp));
    changeSessionState(3, "ongoing");
  };
  const rpartyUpdate = () => {
    const rp = {
      name: rpname,
      number: rpnumber,
      sessionid: sessionId,
      policy,
      claim_number: cNumber,
      address: rpaddress,
      insuranceprovider: insprovider,
    };
    dispatch(updateRParty(rp, rparty._id));
  };
  return (
    <Container fluid>
      <h5 className="text-center p-2">Responsible Party Information</h5>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={12} lg={12}>
          <Form autoComplete={false}>
            {adderror && <p className="text-center text-danger">{adderror}</p>}
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={rpname}
                    onChange={(e) => setRPName(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    value={rpnumber}
                    onChange={(e) => setRPNumber(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={rpaddress}
                    onChange={(e) => setRPAddress(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Insurance Provider</Form.Label>
                  <Form.Control
                    value={insprovider}
                    onChange={(e) => setIProvider(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Policy #</Form.Label>
                  <Form.Control
                    value={policy}
                    onChange={(e) => setPolicy(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Claim number</Form.Label>
                  <Form.Control
                    value={cNumber}
                    onChange={(e) => setCNumber(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  {!rparty._id ? (
                    <Button
                      className="btn-block"
                      // style={{ width: "150px" }}
                      onClick={formSubmit}
                      variant="primary"
                      type="submit"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      className="btn-block"
                      onClick={rpartyUpdate}
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

export default ResponsibleParty;
