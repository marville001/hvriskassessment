import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const VehicleDamageAssessment = () => {
  return (
    <div>
      <h3 className="text-center p-2">Vehicle Damage Assessment</h3>
      <Container fluid className="si_container">
        {/* Question 1 */}
        <div className="item_container">
          <div className="q_container">
            {/* <div className="q_num">{1}</div> */}
            <div className="q_text">
              What position is the vehicle in currently <span>?</span>
            </div>
            <div className="q_bukttons">
              <Form.Control as="select" custom defaultValue="Choose...">
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
              <Form.Control as="select" custom defaultValue="Choose...">
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
      </Container>
    </div>
  );
};

export default VehicleDamageAssessment;
