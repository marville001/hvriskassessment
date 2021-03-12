import React from "react";
import { Button, Container } from "react-bootstrap";

const HazardAssessment = () => {
  return (
    <div>
      <h3 className="text-center p-2">Imediate Hazard Assessment</h3>
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

        {/* Question 2 */}
        <div className="item_container">
          <div className="q_container">
            <div className="q_num">{2}</div>
            <div className="q_text">
            Is the Vehicle Smoking {" "}
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

        {/* Question 3 */}
        <div className="item_container">
          <div className="q_container">
            <div className="q_num">{3}</div>
            <div className="q_text">
            Is the vehicle shut down electrically {" "}
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

        {/* Question 4 */}
        <div className="item_container">
          <div className="q_container">
            <div className="q_num">{4}</div>
            <div className="q_text">
            Do you hear any buzzing, popping, cracking, or hissing coming the vehicle {" "}
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

        {/* Question 4 */}
        <div className="item_container">
          <div className="q_container">
            <div className="q_num">{5}</div>
            <div className="q_text">
            Do you smell anything that would indicate electrical burning {" "}
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

        {/* Question 6 */}
        <div className="item_container">
          <div className="q_container">
            <div className="q_num">{6}</div>
            <div className="q_text">
              Do you smell anything that would indicate electrical burning{" "}
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

export default HazardAssessment;
