import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import HazardQuestion from "../HazardQuestion";

const HVDamageAssessment = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="text-center p-2">HV Damage Assessment</h3>
      <Container fluid className="si_container">
        <HazardQuestion
          quiz={1}
          dispatch={dispatch}
          question={"Is the Battery or Battery storage Area physically damaged"}
          action={() => {}}
          // _id={hazard._id}
          // what={hazard.onfire}
          state={"onfire"}
        />

        <HazardQuestion
          quiz={2}
          dispatch={dispatch}
          question={"Is the Battery or Storage Area leaking fluid"}
          action={() => {}}
          // _id={hazard._id}
          // what={hazard.onfire}
          state={"onfire"}
        />

        <HazardQuestion
          quiz={3}
          dispatch={dispatch}
          question={"Is there any smoke present in the battery area"}
          action={() => {}}
          // _id={hazard._id}
          // what={hazard.onfire}
          state={"onfire"}
        />

        <HazardQuestion
          quiz={4}
          dispatch={dispatch}
          question={"Is there a sweet odor present"}
          action={() => {}}
          // _id={hazard._id}
          // what={hazard.onfire}
          state={"onfire"}
        />

        <HazardQuestion
          quiz={5}
          dispatch={dispatch}
          question={"Is there any damage to the battery components themselves"}
          action={() => {}}
          // _id={hazard._id}
          // what={hazard.onfire}
          state={"onfire"}
        />

        <HazardQuestion
          quiz={6}
          dispatch={dispatch}
          question={"Are the batteries separated from the housing"}
          action={() => {}}
          // _id={hazard._id}
          // what={hazard.onfire}
          state={"onfire"}
        />

        <HazardQuestion
          quiz={7}
          dispatch={dispatch}
          question={" Are there any indications of arcing or electrical damage"}
          action={() => {}}
          // _id={hazard._id}
          // what={hazard.onfire}
          state={"onfire"}
        />

        <div className="item_container">
          <div className="q_container">
            {/* <div className="q_num">{1}</div> */}
            <div className="q_text">
              Identify the HV cable and tell me if there is any damage to it
              from source to source
            </div>
            <div className="q_buttons">
              <Button className="q_button" onClick={() => {}}>
                YES
              </Button>
              <Button className="q_button" onClick={() => {}}>
                NO
              </Button>
            </div>
          </div>
        </div>

        <div className="d-flex-center py-5">
          <Button onClick={() => {}} variant="success">
            Finish Session
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HVDamageAssessment;
