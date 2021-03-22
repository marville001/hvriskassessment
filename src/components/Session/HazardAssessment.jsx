/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { pauseSession } from "../../_actions";
import {
  changeOnfire,
  changeSmoking,
  changeElectricShutdown,
  getHazard,
  changeSound,
  changeSmell,
  changeShutdown,
  changeLevel,
} from "../../_actions";
import HazardQuestion from "../HazardQuestion";

const HazardAssessment = ({ sessionId, changeSessionState }) => {
  const { hazard } = useSelector((state) => state.hazardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHazard(sessionId));
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h3 className="text-center p-2">Imediate Hazard Assessment</h3>
        <h5>
          Level :{" "}
          <span style={{ color: hazard.level, fontWeight: "bolder",textTransform:"uppercase" }}>{hazard.level}</span>
        </h5>
      </div>
      {hazard ? (
        <Container fluid className="si_container">
          {/* Question 1 */}
          <HazardQuestion
            quiz={1}
            dispatch={dispatch}
            question={"Is the vehicle on fire"}
            action={changeOnfire}
            _id={hazard._id}
            what={hazard.onfire}
            state={"onfire"}
            pause={true}
            sessionId={sessionId}
          />
          {/* Question 2 */}
          <HazardQuestion
            quiz={2}
            dispatch={dispatch}
            question={"Is the Vehicle Smoking"}
            action={changeSmoking}
            _id={hazard._id}
            what={hazard.smoking}
            pause={true}
            sessionId={sessionId}
          />
          {/* Question 3 */}
          <HazardQuestion
            quiz={3}
            dispatch={dispatch}
            question={
              "Do you hear any buzzing, popping, cracking, or hissing coming the vehicle"
            }
            action={changeSound}
            _id={hazard._id}
            what={hazard.anysound}
          />

          {/* Question 4 */}
          <HazardQuestion
            quiz={4}
            dispatch={dispatch}
            question={
              "Do you smell anything that would indicate electrical burning"
            }
            action={changeSmell}
            _id={hazard._id}
            what={hazard.anysmell}
            pause={true}
            sessionId={sessionId}
          />

          {/* Question 5 */}
          <HazardQuestion
            quiz={5}
            dispatch={dispatch}
            question={"Is the vehicle shut down electrically"}
            action={changeElectricShutdown}
            _id={hazard._id}
            what={hazard.electricshutdown}
          />

          <div
            className="item_container"
            style={{ display: hazard.electricshutdown ? "block" : "none" }}
          >
            <div className="q_container">
              <div className="q_text">Shutdown Method</div>
              <div>
                <Form.Control
                  onChange={(e) =>
                    dispatch(
                      changeShutdown({
                        shutdown: e.target.value,
                        id: hazard._id,
                      })
                    )
                  }
                  as="select"
                  custom
                  defaultValue={hazard.shutdown ? hazard.shutdown : "Choose..."}
                >
                  <option>Choose...</option>
                  <option value="ignition">EV ignition</option>
                  <option value="powerbutton">power button</option>
                  <option value="disconnect">
                    EV 12 v neg and pos disconnect
                  </option>
                </Form.Control>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "30px 50px",
              }}
            >
              Verified?
              <Form.Check
                style={{ marginLeft: "20px" }}
                type={"radio"}
                name="verified"
                label={"Yes"}
              />
              <Form.Check
                onClick={() => setModalOpen(true)}
                type={"radio"}
                name="verified"
                label={"No"}
              />
            </div>
          </div>

          <Modal show={modalOpen} onHide={() => {}}>
            <Modal.Header>
              <Modal.Title>Select appropriate validation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
                Pending validation of energy isolation, or manual disconnect
                protocol{" "}
                <Button
                  onClick={() => {
                    setModalOpen(false);
                    dispatch(changeLevel({ level: "orange", id: hazard._id }));
                    dispatch(pauseSession({ sessionId }));
                  }}
                >
                  Select
                </Button>
              </h5>
              <hr />
              <h5>
                Unable to validate energy isolation and manual disconnect
                protocol unable to be completed or refused.{" "}
                <Button
                  onClick={() => {
                    setModalOpen(false);
                    dispatch(changeLevel({ level: "red", id: hazard._id }));
                    dispatch(pauseSession({ sessionId }));
                  }}
                >
                  Select
                </Button>
              </h5>
            </Modal.Body>
          </Modal>

          <div className="d-flex-center py-5">
            <Button
              onClick={() => changeSessionState(5, "ongoing")}
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

export default HazardAssessment;
