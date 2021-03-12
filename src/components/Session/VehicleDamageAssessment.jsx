import React from "react";
import { Button, Container } from "react-bootstrap";

const VehicleDamageAssessment = () => {
  return (
    <div>
      <h3 className="text-center p-2">Vehicle Damage Assessment</h3>
      <Container fluid className="si_container">
        {/* Question 1 */}
        <div className="item_container">
          <div className="q_container">
            <div className="q_num">{1}</div>
            <div className="q_text">
            Is the Vehicle on fire {" "}
              <span>?</span>
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
          <p className="q_add_note text-primary">
            <span>+</span> Add Note
          </p>
        </div>
      </Container>
    </div>
  );
};

export default VehicleDamageAssessment;
