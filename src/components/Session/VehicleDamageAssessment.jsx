/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changePosition,
  getVdamage,
  changeDamaged,
  changeWhichAirBag,
  changeAirBagDeploys,
  changeVOnFire,
  changeSubmerged,
  changeBAreaFlooded,
  changeAnyPartOfHvExposed,
} from "../../_actions";

const VehicleDamageAssessment = ({ sessionId, activeStep, setActiveStep,changeSessionState }) => {
  const { vdamage } = useSelector((state) => state.vDamageReducer);
  const dispatch = useDispatch();

  const {
    _id,
    airbagdeploys,
    anypartofhvexposed,
    bareaflooded,
    // damaged,
    // notes,
    onfire,
    // position,
    submerged,
    // whichairbag,
  } = vdamage;
  console.log(vdamage);
  useEffect(() => {
    dispatch(getVdamage(sessionId));
  }, []);
  return (
    <div>
      <h3 className="text-center p-2">Vehicle Damage Assessment</h3>
      {vdamage ? (
        <Container fluid className="si_container">
          <div className="item_container">
            <div className="q_container">
              {/* <div className="q_num">{1}</div> */}
              <div className="q_text">
                What position is the vehicle in currently <span>?</span>
              </div>
              <div className="q_bukttons">
                <Form.Control
                  onChange={(e) =>
                    dispatch(changePosition({ id: _id, state: e.target.value }))
                  }
                  as="select"
                  custom
                  defaultValue="Choose..."
                >
                  <option>Choose...</option>
                  <option>Upright</option>
                  <option>Drivers side</option>
                  <option>Passenger Side</option>
                  <option>Inverted</option>
                </Form.Control>
              </div>
            </div>
          </div>

          <div className="item_container">
            <div className="q_container">
              <div className="q_text">
                Where is the Vehicle Damaged <span>?</span>
              </div>
              <div className="q_bukttons">
                <Form.Control
                  onChange={(e) =>
                    dispatch(changeDamaged({ id: _id, state: e.target.value }))
                  }
                  as="select"
                  custom
                  defaultValue="Choose..."
                >
                  <option>Choose...</option>
                  <option>Front</option>
                  <option>Drivers side</option>
                  <option>Passenger Side</option>
                  <option>Rear</option>
                  <option>Undercarriage</option>
                  <option>Top</option>
                </Form.Control>
              </div>
            </div>
          </div>

          <div className="item_container">
            <div className="q_container">
              <Form.Group as={Row}>
                <Form.Label className="q_text" as="legend" column sm={12}>
                  Please Rate the Severity of the Damage
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    onChange={(e) => console.log(e.target.value)}
                    type="radio"
                    label="Light"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Moderate"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="Heavy"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </div>
            <p className="q_add_note text-primary">
              <span>+</span> Add Note
            </p>
          </div>

          <Accordion>
            <Card>
              <Card.Header>
                <div className="q_container">
                  <div className="q_text">
                    <div className="ask">*</div>Did the airbags Deploy{" "}
                    <span>?</span>
                  </div>
                  <div className="q_buttons">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <Button
                        className="q_button"
                        disabled={
                          airbagdeploys === undefined
                            ? false
                            : airbagdeploys
                            ? true
                            : false
                        }
                        style={{
                          backgroundColor:
                            airbagdeploys === undefined
                              ? false
                              : airbagdeploys
                              ? "#007bff"
                              : "#fff",
                          color:
                            airbagdeploys === undefined
                              ? false
                              : airbagdeploys
                              ? "#fff"
                              : "#007bff",
                        }}
                        onClick={() =>
                          dispatch(
                            changeAirBagDeploys({
                              id: _id,
                              state: true,
                            })
                          )
                        }
                      >
                        YES
                      </Button>
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <Button
                        className="q_button"
                        disabled={
                          airbagdeploys === undefined
                            ? false
                            : !airbagdeploys
                            ? true
                            : false
                        }
                        style={{
                          backgroundColor:
                            airbagdeploys === undefined
                              ? false
                              : !airbagdeploys
                              ? "#007bff"
                              : "#fff",
                          color:
                            airbagdeploys === undefined
                              ? false
                              : !airbagdeploys
                              ? "#fff"
                              : "#007bff",
                        }}
                        onClick={() => {
                          dispatch(
                            changeAirBagDeploys({
                              id: _id,
                              state: false,
                            })
                          );
                          dispatch(
                            changeWhichAirBag({
                              id: _id,
                              state: undefined,
                            })
                          );
                        }}
                      >
                        NO
                      </Button>
                    </Accordion.Toggle>
                  </div>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="item_container">
                  <div className="q_container">
                    <div className="q_text">
                      Which airbag? <span>?</span>
                    </div>
                    <div className="q_bukttons">
                      <Form.Control
                        onChange={(e) =>
                          dispatch(
                            changeWhichAirBag({
                              id: _id,
                              state: e.target.value,
                            })
                          )
                        }
                        as="select"
                        custom
                        defaultValue="Choose..."
                      >
                        <option>Choose...</option>
                        <option>Front</option>
                        <option>Drivers side</option>
                        <option>Passenger Side</option>
                        <option>Rear</option>
                        <option>Undercarriage</option>
                        <option>Top</option>
                      </Form.Control>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion>
            <Card>
              <Card.Header>
                <div className="q_container">
                  <div className="q_text">
                    <div className="ask">*</div>Was the vehicle submerged or
                    exposed to high volumes of water <span>?</span>
                  </div>
                  <div className="q_buttons">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <Button
                        disabled={
                          submerged === undefined
                            ? false
                            : submerged
                            ? true
                            : false
                        }
                        style={{
                          backgroundColor:
                            submerged === undefined
                              ? false
                              : submerged
                              ? "#007bff"
                              : "#fff",
                          color:
                            submerged === undefined
                              ? false
                              : submerged
                              ? "#fff"
                              : "#007bff",
                        }}
                        onClick={() =>
                          dispatch(
                            changeSubmerged({
                              id: _id,
                              state: true,
                            })
                          )
                        }
                        className="q_button"
                      >
                        YES
                      </Button>
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <Button
                        disabled={
                          submerged === undefined
                            ? false
                            : !submerged
                            ? true
                            : false
                        }
                        style={{
                          backgroundColor:
                            submerged === undefined
                              ? false
                              : !submerged
                              ? "#007bff"
                              : "#fff",
                          color:
                            submerged === undefined
                              ? false
                              : !submerged
                              ? "#fff"
                              : "#007bff",
                        }}
                        className="q_button"
                        onClick={() => {
                          dispatch(
                            changeSubmerged({
                              id: _id,
                              state: false,
                            })
                          );
                          dispatch(
                            changeBAreaFlooded({
                              id: _id,
                              state: undefined,
                            })
                          );
                        }}
                      >
                        NO
                      </Button>
                    </Accordion.Toggle>
                  </div>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="item_container">
                  <div className="q_container">
                    <div className="q_text">
                      Is the battery area flooded <span>?</span>
                    </div>
                    <div className="q_buttons">
                      <Button
                        disabled={
                          bareaflooded === undefined
                            ? false
                            : bareaflooded
                            ? true
                            : false
                        }
                        style={{
                          backgroundColor:
                            bareaflooded === undefined
                              ? false
                              : bareaflooded
                              ? "#007bff"
                              : "#fff",
                          color:
                            bareaflooded === undefined
                              ? false
                              : bareaflooded
                              ? "#fff"
                              : "#007bff",
                        }}
                        onClick={() =>
                          dispatch(
                            changeBAreaFlooded({
                              id: _id,
                              state: true,
                            })
                          )
                        }
                        className="q_button"
                      >
                        YES
                      </Button>
                      <Button
                        disabled={
                          bareaflooded === undefined
                            ? false
                            : !bareaflooded
                            ? true
                            : false
                        }
                        style={{
                          backgroundColor:
                            bareaflooded === undefined
                              ? false
                              : !bareaflooded
                              ? "#007bff"
                              : "#fff",
                          color:
                            bareaflooded === undefined
                              ? false
                              : !bareaflooded
                              ? "#fff"
                              : "#007bff",
                        }}
                        className="q_button"
                        onClick={() =>
                          dispatch(
                            changeBAreaFlooded({
                              id: _id,
                              state: false,
                            })
                          )
                        }
                      >
                        NO
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion>
            <Card>
              <Card.Header>
                <div className="q_container">
                  <div className="q_text">
                    <div className="ask">*</div>Was the vehicle on fire or is
                    there any evidence of fire damage <span>?</span>
                  </div>
                  <div className="q_buttons">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <Button
                        disabled={
                          onfire === undefined ? false : onfire ? true : false
                        }
                        style={{
                          backgroundColor:
                            onfire === undefined
                              ? false
                              : onfire
                              ? "#007bff"
                              : "#fff",
                          color:
                            onfire === undefined
                              ? false
                              : onfire
                              ? "#fff"
                              : "#007bff",
                        }}
                        onClick={() =>
                          dispatch(
                            changeVOnFire({
                              id: _id,
                              state: true,
                            })
                          )
                        }
                        className="q_button"
                      >
                        YES
                      </Button>
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <Button
                        disabled={
                          onfire === undefined ? false : !onfire ? true : false
                        }
                        style={{
                          backgroundColor:
                            onfire === undefined
                              ? false
                              : !onfire
                              ? "#007bff"
                              : "#fff",
                          color:
                            onfire === undefined
                              ? false
                              : !onfire
                              ? "#fff"
                              : "#007bff",
                        }}
                        className="q_button"
                        onClick={() =>
                          dispatch(
                            changeVOnFire({
                              id: _id,
                              state: false,
                            })
                          )
                        }
                      >
                        NO
                      </Button>
                    </Accordion.Toggle>
                  </div>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="item_container">
                  <div className="q_container">
                    <div className="q_text">
                      Was any part of the HV system exposed to fire or heat{" "}
                      <span>?</span>
                    </div>
                    <div className="q_buttons">
                      <Button
                        disabled={
                          anypartofhvexposed === undefined
                            ? false
                            : anypartofhvexposed
                            ? true
                            : false
                        }
                        style={{
                          backgroundColor:
                            anypartofhvexposed === undefined
                              ? false
                              : anypartofhvexposed
                              ? "#007bff"
                              : "#fff",
                          color:
                            anypartofhvexposed === undefined
                              ? false
                              : anypartofhvexposed
                              ? "#fff"
                              : "#007bff",
                        }}
                        onClick={() =>
                          dispatch(
                            changeAnyPartOfHvExposed({
                              id: _id,
                              state: true,
                            })
                          )
                        }
                        className="q_button"
                      >
                        YES
                      </Button>
                      <Button
                        className="q_button"
                        disabled={
                          anypartofhvexposed === undefined
                            ? false
                            : !anypartofhvexposed
                            ? true
                            : false
                        }
                        style={{
                          backgroundColor:
                            anypartofhvexposed === undefined
                              ? false
                              : !anypartofhvexposed
                              ? "#007bff"
                              : "#fff",
                          color:
                            anypartofhvexposed === undefined
                              ? false
                              : !anypartofhvexposed
                              ? "#fff"
                              : "#007bff",
                        }}
                        onClick={() =>
                          dispatch(
                            changeAnyPartOfHvExposed({
                              id: _id,
                              state: false,
                            })
                          )
                        }
                      >
                        NO
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <div className="d-flex-center py-5">
            <Button
              onClick={() => changeSessionState(activeStep + 1, "ongoing")}
              variant="success"
            >
              Next
            </Button>
          </div>
        </Container>
      ) : null}
    </div>
  );
};

export default VehicleDamageAssessment;
