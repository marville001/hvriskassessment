import React from "react";
import {  Container } from "react-bootstrap";
import QuestionContainer from "../QuestionContainer";

const HazardAssessment = () => {
  return (
    <div>
      <h3 className="text-center p-2">Imediate Hazard Assessment</h3>
      <Container fluid className="si_container">
        <QuestionContainer num={1} question="Is the Vehicle on fire" />
        <QuestionContainer num={2} question="Is the Vehicle Smoking" />
        <QuestionContainer num={3} question="Is the vehicle shut down electrically"/>
        <QuestionContainer num={4} />
      </Container>
    </div>
  );
};

export default HazardAssessment;
