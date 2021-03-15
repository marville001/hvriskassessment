/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HazardQuestion from "../HazardQuestion";

import {
  getHVdamage,
  changeBatteryDamaged,
  changeLeakingFluid,
  changeOdor,
  changeAnySmoke,
  changeBCompDamaged,
  changeBatterySeparated,
  changeElectricalDamage,
  changeCableDamage,
} from "../../_actions";

const HVDamageAssessment = ({
  sessionId,
  activeStep,
  setActiveStep,
  changeSessionState,
}) => {
  const { hvdamage } = useSelector((state) => state.hvDamageReducer);
  const dispatch = useDispatch();

  const endSession = () => {
    changeSessionState(activeStep + 1, "ended")
    window.location.href = "/sessionend?sessionid=" + sessionId;
  };

  useEffect(() => {
    dispatch(getHVdamage(sessionId));
  }, []);
  return (
    <div>
      <h3 className="text-center p-2">HV Damage Assessment</h3>
      {hvdamage ? (
        <Container fluid className="si_container">
          <HazardQuestion
            quiz={1}
            dispatch={dispatch}
            question={
              "Is the Battery or Battery storage Area physically damaged"
            }
            action={changeBatteryDamaged}
            _id={hvdamage._id}
            what={hvdamage.batterydamaged}
            state={"batterydamaged"}
          />

          <HazardQuestion
            quiz={2}
            dispatch={dispatch}
            question={"Is the Battery or Storage Area leaking fluid"}
            action={changeLeakingFluid}
            _id={hvdamage._id}
            what={hvdamage.leakingfluid}
            state={"leakingfluid"}
          />

          <HazardQuestion
            quiz={3}
            dispatch={dispatch}
            question={"Is there any smoke present in the battery area"}
            action={changeAnySmoke}
            _id={hvdamage._id}
            what={hvdamage.anysmoke}
            state={"anysmoke"}
          />

          <HazardQuestion
            quiz={4}
            dispatch={dispatch}
            question={"Is there a sweet odor present"}
            action={changeOdor}
            _id={hvdamage._id}
            what={hvdamage.odor}
            state={"odor"}
          />

          <HazardQuestion
            quiz={5}
            dispatch={dispatch}
            question={
              "Is there any damage to the battery components themselves"
            }
            action={changeBCompDamaged}
            _id={hvdamage._id}
            what={hvdamage.bcompdamaged}
            state={"bcompdamaged"}
          />

          <HazardQuestion
            quiz={6}
            dispatch={dispatch}
            question={"Are the batteries separated from the housing"}
            action={changeBatterySeparated}
            _id={hvdamage._id}
            what={hvdamage.batteryseparated}
            state={"batteryseparated"}
          />

          <HazardQuestion
            quiz={7}
            dispatch={dispatch}
            question={
              " Are there any indications of arcing or electrical damage"
            }
            action={changeElectricalDamage}
            _id={hvdamage._id}
            what={hvdamage.electricaldamage}
            state={"electricaldamage"}
          />

          <div className="item_container">
            <div className="q_container">
              {/* <div className="q_num">{1}</div> */}
              <div className="q_text">
                Identify the HV cable and tell me if there is any damage to it
                from source to source
              </div>
              <div className="q_buttons">
                <Button
                disabled={hvdamage.cabledamage === null ? false : hvdamage.cabledamage ? true : false}
                style={{
                  backgroundColor:
                    hvdamage.cabledamage === null ? false : hvdamage.cabledamage ? "#007bff" : "#fff",
                  color: hvdamage.cabledamage === null ? false : hvdamage.cabledamage ? "#fff" : "#007bff",
                }}
                className="q_button" onClick={() => dispatch(changeCableDamage({ id: hvdamage._id, state: true }))}>
                  YES
                </Button>
                <Button 
                disabled={hvdamage.cabledamage === null ? false : !hvdamage.cabledamage ? true : false}
                style={{
                  backgroundColor:
                    hvdamage.cabledamage === null ? false : !hvdamage.cabledamage ? "#007bff" : "#fff",
                  color: hvdamage.cabledamage === null ? false : !hvdamage.cabledamage ? "#fff" : "#007bff",
                }}
                className="q_button" onClick={() => dispatch(changeCableDamage({ id: hvdamage._id, state: false }))}>
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
        </Container>
      ) : null}
    </div>
  );
};

export default HVDamageAssessment;
