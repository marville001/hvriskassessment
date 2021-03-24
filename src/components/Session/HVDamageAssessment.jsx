/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  changeBatteryDamaged,
  changeLeakingFluid,
  changeOdor,
  changeAnySmoke,
  changeBCompDamaged,
  changeBatterySeparated,
  changeElectricalDamage,
  changeCableDamage,
  changehvDamageLevel,
  pauseSession,
} from "../../_actions";
import axios from "axios";
import api from "../../_actions/values";

const HVDamageAssessment = ({
  sessionId,
  activeStep,
  setActiveStep,
  changeSessionState,
}) => {
  const { hvdamage } = useSelector((state) => state.hvDamageReducer);
  const dispatch = useDispatch();

  const sendEmail = async () => {
    const token = localStorage.getItem("token");
    try {
      const data = await axios.post(
        api + "/api/email/send",
        {
          body: "Click the link below to upload photos",
          link: `${api}/upload/${sessionId}`,
          sessionId,
          subject: "Upload Photos",
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      console.log(data);
      changeSessionState(activeStep + 1, "ended");
    } catch (error) {
      alert("An error has occured", error);
    }
  };

  const endSession = () => {
    sendEmail();
  };

  const [modalOpen, setModalOpen] = useState(false);

  const {
    batterydamaged,
    _id,
    leakingfluid,
    anysmoke,
    odor,
    level,
    bcompdamaged,
    batteryseparated,
    electricaldamage,
    cabledamage,
  } = hvdamage;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h3 className="text-center p-2">HV Damage Assessment</h3>
        <h5>
          Level :{" "}
          <span
            style={{
              color: level,
              fontWeight: "bolder",
              textTransform: "uppercase",
            }}
          >
            {level}
          </span>
        </h5>
      </div>
      {hvdamage ? (
        <Container fluid className="si_container">
          <div className="item_container">
            <div className="q_container">
              <div className="q_num">{1}</div>
              <div className="q_text">
                Is the Battery or Battery storage Area physically damaged
                <span>?</span>
              </div>
              <div className="q_buttons">
                <Button
                  className="q_button"
                  disabled={
                    batterydamaged === null
                      ? false
                      : batterydamaged
                      ? true
                      : false
                  }
                  style={{
                    backgroundColor:
                      batterydamaged === null
                        ? false
                        : batterydamaged
                        ? "#007bff"
                        : "#fff",
                    color:
                      batterydamaged === null
                        ? false
                        : batterydamaged
                        ? "#fff"
                        : "#007bff",
                  }}
                  onClick={() => {
                    dispatch(changeBatteryDamaged({ id: _id, state: true }));

                    dispatch(changehvDamageLevel({ id: _id, state: level === "red" ? "red" : "orange" }));
                    dispatch(pauseSession({ sessionId }));
                  }}
                >
                  YES
                </Button>
                <Button
                  disabled={
                    batterydamaged === null
                      ? false
                      : !batterydamaged
                      ? true
                      : false
                  }
                  style={{
                    backgroundColor:
                      batterydamaged === null
                        ? false
                        : !batterydamaged
                        ? "#007bff"
                        : "#fff",
                    color:
                      batterydamaged === null
                        ? false
                        : batterydamaged
                        ? "#007bff"
                        : "#fff",
                  }}
                  className="q_button"
                  onClick={() =>
                    dispatch(changeBatteryDamaged({ id: _id, state: false }))
                  }
                >
                  NO
                </Button>
              </div>
            </div>
          </div>

          <div className="item_container">
            <div className="q_container">
              <div className="q_num">{2}</div>
              <div className="q_text">
                Is the Battery or Storage Area leaking fluid
                <span>?</span>
              </div>
              <div className="q_buttons">
                <Button
                  className="q_button"
                  disabled={
                    leakingfluid === null ? false : leakingfluid ? true : false
                  }
                  style={{
                    backgroundColor:
                      leakingfluid === null
                        ? false
                        : leakingfluid
                        ? "#007bff"
                        : "#fff",
                    color:
                      leakingfluid === null
                        ? false
                        : leakingfluid
                        ? "#fff"
                        : "#007bff",
                  }}
                  onClick={() => {
                    dispatch(changeLeakingFluid({ id: _id, state: true }));
                    dispatch(changehvDamageLevel({ id: _id, state: level === "red" ? "red" : "orange" }));
                    dispatch(pauseSession({ sessionId }));
                  }}
                >
                  YES
                </Button>
                <Button
                  disabled={
                    leakingfluid === null ? false : !leakingfluid ? true : false
                  }
                  style={{
                    backgroundColor:
                      leakingfluid === null
                        ? false
                        : !leakingfluid
                        ? "#007bff"
                        : "#fff",
                    color:
                      leakingfluid === null
                        ? false
                        : leakingfluid
                        ? "#007bff"
                        : "#fff",
                  }}
                  className="q_button"
                  onClick={() =>
                    dispatch(changeLeakingFluid({ id: _id, state: false }))
                  }
                >
                  NO
                </Button>
              </div>
            </div>
          </div>

          <div className="item_container">
            <div className="q_container">
              <div className="q_num">{3}</div>
              <div className="q_text">
                Is there any smoke present in the battery area
                <span>?</span>
              </div>
              <div className="q_buttons">
                <Button
                  className="q_button"
                  disabled={anysmoke === null ? false : anysmoke ? true : false}
                  style={{
                    backgroundColor:
                      anysmoke === null ? false : anysmoke ? "#007bff" : "#fff",
                    color:
                      anysmoke === null ? false : anysmoke ? "#fff" : "#007bff",
                  }}
                  onClick={() => {
                    dispatch(changeAnySmoke({ id: _id, state: true }));
                    dispatch(changehvDamageLevel({ id: _id, state: level === "red" ? "red" : "orange" }));
                  }}
                >
                  YES
                </Button>
                <Button
                  disabled={
                    anysmoke === null ? false : !anysmoke ? true : false
                  }
                  style={{
                    backgroundColor:
                      anysmoke === null
                        ? false
                        : !anysmoke
                        ? "#007bff"
                        : "#fff",
                    color:
                      anysmoke === null ? false : anysmoke ? "#007bff" : "#fff",
                  }}
                  className="q_button"
                  onClick={() =>
                    dispatch(changeAnySmoke({ id: _id, state: false }))
                  }
                >
                  NO
                </Button>
              </div>
            </div>
          </div>

          <div className="item_container">
            <div className="q_container">
              <div className="q_num">{4}</div>
              <div className="q_text">
                Is there a sweet odor present
                <span>?</span>
              </div>
              <div className="q_buttons">
                <Button
                  className="q_button"
                  disabled={odor === null ? false : odor ? true : false}
                  style={{
                    backgroundColor:
                      odor === null ? false : odor ? "#007bff" : "#fff",
                    color: odor === null ? false : odor ? "#fff" : "#007bff",
                  }}
                  onClick={() => {
                    dispatch(changeOdor({ id: _id, state: true }));
                    dispatch(changehvDamageLevel({ id: _id, state: level === "red" ? "red" : "orange" }));
                  }}
                >
                  YES
                </Button>
                <Button
                  disabled={odor === null ? false : !odor ? true : false}
                  style={{
                    backgroundColor:
                      odor === null ? false : !odor ? "#007bff" : "#fff",
                    color: odor === null ? false : odor ? "#007bff" : "#fff",
                  }}
                  className="q_button"
                  onClick={() =>
                    dispatch(changeOdor({ id: _id, state: false }))
                  }
                >
                  NO
                </Button>
              </div>
            </div>
          </div>

          <div className="item_container">
            <div className="q_container">
              <div className="q_num">{5}</div>
              <div className="q_text">
                Is there any damage to the battery components themselves
                <span>?</span>
              </div>
              <div className="q_buttons">
                <Button
                  className="q_button"
                  disabled={
                    bcompdamaged === null ? false : bcompdamaged ? true : false
                  }
                  style={{
                    backgroundColor:
                      bcompdamaged === null
                        ? false
                        : bcompdamaged
                        ? "#007bff"
                        : "#fff",
                    color:
                      bcompdamaged === null
                        ? false
                        : bcompdamaged
                        ? "#fff"
                        : "#007bff",
                  }}
                  onClick={() => {
                    dispatch(changeBCompDamaged({ id: _id, state: true }));
                    dispatch(changehvDamageLevel({ id: _id, state: level === "red" ? "red" : "orange" }));
                    setModalOpen(true);
                  }}
                >
                  YES
                </Button>
                <Button
                  disabled={
                    bcompdamaged === null ? false : !bcompdamaged ? true : false
                  }
                  style={{
                    backgroundColor:
                      bcompdamaged === null
                        ? false
                        : !bcompdamaged
                        ? "#007bff"
                        : "#fff",
                    color:
                      bcompdamaged === null
                        ? false
                        : bcompdamaged
                        ? "#007bff"
                        : "#fff",
                  }}
                  className="q_button"
                  onClick={() =>
                    dispatch(changeBCompDamaged({ id: _id, state: false }))
                  }
                >
                  NO
                </Button>
              </div>
            </div>
            <div
              style={{
                padding: "20px 50px",
                color: "orange",
                display: bcompdamaged ? "block" : "none",
              }}
            ></div>
          </div>

          <div className="item_container">
            <div className="q_container">
              <div className="q_num">{6}</div>
              <div className="q_text">
                Are the batteries separated from the housing
                <span>?</span>
              </div>
              <div className="q_buttons">
                <Button
                  className="q_button"
                  disabled={
                    batteryseparated === null
                      ? false
                      : batteryseparated
                      ? true
                      : false
                  }
                  style={{
                    backgroundColor:
                      batteryseparated === null
                        ? false
                        : batteryseparated
                        ? "#007bff"
                        : "#fff",
                    color:
                      batteryseparated === null
                        ? false
                        : batteryseparated
                        ? "#fff"
                        : "#007bff",
                  }}
                  onClick={() => {
                    dispatch(changeBatterySeparated({ id: _id, state: true }));
                    dispatch(changehvDamageLevel({ id: _id, state: "red" }));
                  }}
                >
                  YES
                </Button>
                <Button
                  disabled={
                    batteryseparated === null
                      ? false
                      : !batteryseparated
                      ? true
                      : false
                  }
                  style={{
                    backgroundColor:
                      batteryseparated === null
                        ? false
                        : !batteryseparated
                        ? "#007bff"
                        : "#fff",
                    color:
                      batteryseparated === null
                        ? false
                        : batteryseparated
                        ? "#007bff"
                        : "#fff",
                  }}
                  className="q_button"
                  onClick={() => {
                    dispatch(changeBatterySeparated({ id: _id, state: false }));
                    dispatch(changehvDamageLevel({ id: _id, state: "orange" }));
                  }}
                >
                  NO
                </Button>
              </div>
            </div>
          </div>

          <div className="item_container">
            <div className="q_container">
              <div className="q_num">{7}</div>
              <div className="q_text">
                Are there any indications of arcing or electrical damage
                <span>?</span>
              </div>
              <div className="q_buttons">
                <Button
                  className="q_button"
                  disabled={
                    electricaldamage === null
                      ? false
                      : electricaldamage
                      ? true
                      : false
                  }
                  style={{
                    backgroundColor:
                      electricaldamage === null
                        ? false
                        : electricaldamage
                        ? "#007bff"
                        : "#fff",
                    color:
                      electricaldamage === null
                        ? false
                        : electricaldamage
                        ? "#fff"
                        : "#007bff",
                  }}
                  onClick={() => {
                    dispatch(changeElectricalDamage({ id: _id, state: true }));
                    dispatch(changehvDamageLevel({ id: _id, state: level === "red" ? "red" : "orange" }));
                    setModalOpen(true);
                  }}
                >
                  YES
                </Button>
                <Button
                  disabled={
                    electricaldamage === null
                      ? false
                      : !electricaldamage
                      ? true
                      : false
                  }
                  style={{
                    backgroundColor:
                      electricaldamage === null
                        ? false
                        : !electricaldamage
                        ? "#007bff"
                        : "#fff",
                    color:
                      electricaldamage === null
                        ? false
                        : electricaldamage
                        ? "#007bff"
                        : "#fff",
                  }}
                  className="q_button"
                  onClick={() =>
                    dispatch(changeElectricalDamage({ id: _id, state: false }))
                  }
                >
                  NO
                </Button>
              </div>
            </div>
          </div>

          <div className="item_container">
            <div className="q_container">
              {/* <div className="q_num">{1}</div> */}
              <div className="q_text">
                Identify the HV cable and tell me if there is any damage to it
                from source to source
              </div>
              <div className="q_buttons">
                <Button
                  disabled={
                    cabledamage === null ? false : cabledamage ? true : false
                  }
                  style={{
                    backgroundColor:
                      cabledamage === null
                        ? false
                        : cabledamage
                        ? "#007bff"
                        : "#fff",
                    color:
                      cabledamage === null
                        ? false
                        : cabledamage
                        ? "#fff"
                        : "#007bff",
                  }}
                  className="q_button"
                  onClick={() => {
                    dispatch(changeCableDamage({ id: _id, state: true }));
                    dispatch(changehvDamageLevel({ id: _id, state: level === "red" ? "red" : "orange" }));
                    setModalOpen(true);
                  }}
                >
                  YES
                </Button>
                <Button
                  disabled={
                    cabledamage === null ? false : !cabledamage ? true : false
                  }
                  style={{
                    backgroundColor:
                      cabledamage === null
                        ? false
                        : !cabledamage
                        ? "#007bff"
                        : "#fff",
                    color:
                      cabledamage === null
                        ? false
                        : !cabledamage
                        ? "#fff"
                        : "#007bff",
                  }}
                  className="q_button"
                  onClick={() =>
                    dispatch(changeCableDamage({ id: _id, state: false }))
                  }
                >
                  NO
                </Button>
              </div>
            </div>
          </div>

          <div className="d-flex-center py-5">
            <Button onClick={endSession} variant="success">
              Finish Session
            </Button>
          </div>

          <Modal show={modalOpen} onHide={() => {}}>
            <Modal.Header>
              <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
                Manual Disconnect may be required. Is there any untrained
                personel?
              </h5>
              <Button
                onClick={() => {
                  dispatch(
                    changehvDamageLevel({
                      id: _id,
                      state: level === "red" ? "red" : "orange",
                    })
                  );
                  setModalOpen(false);
                }}
                style={{ margin: "20px" }}
              >
                No
              </Button>
              <Button
                onClick={() => {
                  dispatch(changehvDamageLevel({ id: _id, state: "red" }));
                  setModalOpen(false);
                }}
              >
                Yes
              </Button>
            </Modal.Body>
          </Modal>
        </Container>
      ) : null}
    </div>
  );
};

export default HVDamageAssessment;
