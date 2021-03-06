import React from "react";
import { Button, Container } from "react-bootstrap";

const HazardAssessment = () => {
  return (
    <div>
      <h3 className="text-center p-2">Imediate Hazard Assessment</h3>
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
        <div className="item_container">
          <div className="q_container">
            <div className="q_num">2</div>
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
        <div className="item_container">
          <div className="q_container">
            <div className="q_num">3</div>
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
      </Container>
    </div>
  );
};

export default HazardAssessment;
