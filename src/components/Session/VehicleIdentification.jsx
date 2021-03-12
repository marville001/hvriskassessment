import React, { useState } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addVehicleDetails } from "../../_actions";
const VehicleIdentification = (props) => {
  const dispatch = useDispatch();
  const { vehicleerror } = useSelector((state) => state.sessionReducer);

  const [inputError, setInputError] = useState("");
  const {
    activeStep,
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
  const formSubmit = (e) => {
    e.preventDefault();

    const vehicle = {
      vin,
      model,
      sessionid: sessionId,
      licence,
      lpstate,
      make,
      year,
    };

    if (
      vin === "" ||
      model === "" ||
      licence === "" ||
      make === "" ||
      lpstate === "" ||
      year === ""
    ) {
      setInputError("All fields are required");
    } else {
      dispatch(addVehicleDetails(vehicle));

      changeSessionState(activeStep + 1, "ongoing");
    }
  };
  return (
    <Container fluid>
      <h4 className="text-center p-2">Vehicle Identification</h4>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={12} lg={12}>
        {inputError && (
              <p className="text-center text-danger">{inputError}</p>
            )}
            {vehicleerror && (
              <p className="text-center text-danger">{vehicleerror}</p>
            )}
          <Form autoComplete={false}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Make</Form.Label>
                  <Form.Control
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    type="text"
                    placeholder=""
                  />
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

export default VehicleIdentification;
