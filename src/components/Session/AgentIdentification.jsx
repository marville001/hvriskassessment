import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";

const AgentIdentification = ({activeStep, setActiveStep}) => {
  // const [anyHazard , setHazard] = useState(null)
  return (
    <div>
      <h5 className="text-center p-2">Agent Identification</h5>
      <Accordion>
        <Card>
          <Card.Header>
            <div className="q_container">
              <div className="q_text">
                <div className="ask">*</div>This is Agent “X”, Are there
                currently any immediate hazard to life or property{" "}
                <span>?</span>
              </div>
              <div className="q_buttons">
                <Button className="q_button">YES</Button>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Button className="q_button">NO</Button>
                </Accordion.Toggle>
              </div>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p className="lead">
                <span className="ask">*</span>How can I help you?
              </p>
              <p className="lead">
                NB:{" "}
                <i>
                  If the caller indicates an emergency advise caller to call 911
                  and isolate themselves from the vehicle a minimum of 75
                </i>
              </p>
              <h5>Disclaimer:</h5>
              <p>
              <span className="ask">*</span>“I have to advise you of the potential risks associated with
                ELECTRIC AND HYBRID-ELECTRIC VEHICLES. In the event of damage to
                or fire involving an electric vehicle (EV) or hybrid-electric
                vehicle (HEV):”
              </p>
              <ol>
                <li>
                  Always assume the high voltage (HV) battery and associated
                  components are energized and fully charged.
                </li>
                <li>
                  Exposed electrical components, wires, and HV batteries present
                  potential HV shock hazards.
                </li>
                <li>
                  Venting/off-gassing HV battery vapors are potentially toxic
                  and flammable.
                </li>
                <li>
                  Physical damage to the vehicle or HV battery may result in
                  immediate or delayed release of toxic and/or flammable gases
                  and fire.
                </li>
              </ol>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div className="continue_btn">
        <Button onClick={()=>setActiveStep(activeStep+1)} >Continue</Button>
      </div>
    </div>
  );
};

export default AgentIdentification;
