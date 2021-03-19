/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOnfire,
  changeSmoking,
  changeElectricShutdown,
  getHazard,
  changeSound,
  changeSmell,
} from "../../_actions/hazardActions";
import HazardQuestion from "../HazardQuestion";

const HazardAssessment = ({ sessionId,activeStep,setActiveStep,changeSessionState }) => {
  const { hazard } = useSelector((state) => state.hazardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHazard(sessionId));
  }, []);
  return (
    <div>
      <h3 className="text-center p-2">Imediate Hazard Assessment</h3>
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
          />
          {/* Question 2 */}
          <HazardQuestion
            quiz={2}
            dispatch={dispatch}
            question={"Is the Vehicle Smoking"}
            action={changeSmoking}
            _id={hazard._id}
            what={hazard.smoking}
          />
          {/* Question 3 */}
          <HazardQuestion
            quiz={3}
            dispatch={dispatch}
            question={"Is the vehicle shut down electrically"}
            action={changeElectricShutdown}
            _id={hazard._id}
            what={hazard.electricshutdown}
          />
          {/* Question 4 */}
          <HazardQuestion
            quiz={4}
            dispatch={dispatch}
            question={
              "Do you hear any buzzing, popping, cracking, or hissing coming the vehicle"
            }
            action={changeSound}
            _id={hazard._id}
            what={hazard.anysound}
          />
          {/* Question 5 */}
          <HazardQuestion
            quiz={5}
            dispatch={dispatch}
            question={
              "Do you smell anything that would indicate electrical burning"
            }
            action={changeSmell}
            _id={hazard._id}
            what={hazard.anysmell}
          />


          <div className="d-flex-center py-5">
            <Button onClick={()=>changeSessionState(5, "ongoing")} variant="success">Next</Button>
          </div>
        </Container>
      ) : null}
    </div>
  );
};

export default HazardAssessment;
