import React from "react";
import { Button, Container } from "react-bootstrap";

const HazardAssessment = () => {
  return (
    <div>
      <h3>Imediate Hazard Assessment</h3>
      <Container fluid className="si_container">
        <div className="item_container">
          <div className="q_container">
            <div className="q_num">1</div>
            <div className="q_text">
              This is Agent “X”, Are there currently any immediate hazard to
              life or property <span>?</span>
            </div>
            <div className="q_buttons">
              <Button className="q_button">YES</Button>
              <Button className="q_button">NO</Button>
            </div>
          </div>
          <p className="q_add_note text-primary">
            <span>+</span> Add Note
          </p>
        </div>

        <div className="item_container" style={{ padding: "30px" }}>
          <h5>
            Disclaimer: “I have to advise you of the potential risks associated
            with ELECTRIC AND HYBRID-ELECTRIC VEHICLES. In the event of damage
            to or fire involving an electric vehicle (EV) or hybrid-electric
            vehicle (HEV):”
          </h5>
        </div>
      </Container>
    </div>
  );
};

export default HazardAssessment;
