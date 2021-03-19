/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle, updateVehicle } from "../../_actions";
const VehicleIdentification = (props) => {
  const dispatch = useDispatch();
  const { makes } = useSelector((state) => state.sessionReducer);
  const { vehicle } = useSelector((state) => state.vehicleReducer);

  const {
    changeSessionState,
    sessionId,
    make,
    model,
    year,
    vin,
    lpstate,
    licence,
    setMake,
    setModel,
    setYear,
    setVin,
    setLPState,
    setLicence,
  } = props;

  useEffect(() => {
    if (vehicle._id) {
      setMake(vehicle.make);
      setModel(vehicle.model);
      setYear(vehicle.year);
      setVin(vehicle.vin);
      setLPState(vehicle.licence);
      setLicence(vehicle.lpstate);
    }
  }, [vehicle]);

  const formSubmit = (e) => {
    e.preventDefault();

    const v = {
      vin,
      model,
      sessionid: sessionId,
      licence,
      lpstate,
      make,
      year,
    };

    dispatch(addVehicle(v));
    changeSessionState(4, "ongoing");
  };

  const vehicleUpdate = () => {
    const v = {
      vin,
      model,
      sessionid: sessionId,
      licence,
      lpstate,
      make,
      year,
    };
    dispatch(updateVehicle(v, vehicle._id));
  };

  const makeChange = (e) => {
    const m = e.target.value;
    setMake(m);
  };

  return (
    <Container fluid>
      <h4 className="text-center p-2">Vehicle Identification</h4>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={12} lg={12}>
          <Form autoComplete={false}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Make</Form.Label>
                  <Form.Control
                    onChange={makeChange}
                    as="select"
                    value={make}
                    custom
                    defaultValue="Choose..."
                  >
                    <option></option>
                    {makes.map((make, i) => (
                      <option id={i}>{make}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Model</Form.Label>
                  <Form.Control
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Vin</Form.Label>
                  <Form.Control
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>LP State</Form.Label>
                  <Form.Control
                    value={lpstate}
                    onChange={(e) => setLPState(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Licence Plate</Form.Label>
                  <Form.Control
                    value={licence}
                    onChange={(e) => setLicence(e.target.value)}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  {!vehicle._id ? (
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
                      onClick={vehicleUpdate}
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

export default VehicleIdentification;
