import React, { useState } from "react";
import NavBar from "../components/Navbar";
import SessionProgress from "../components/SessionProgress";

import {
  AgentIdentification,
  CallerIdentification,
  ResponsibleParty,
  VehicleIdentification,
  HazardAssessment,
  VehicleDamageAssessment,
  HVDamageAssessment,
} from "../components";

const Session = () => {
  const [activeStep, setActiveStep] = useState(5);

  return (
    <>
      <NavBar />
      <div style={{ marginTop: "10vh" }}>
        <SessionProgress activeStep={activeStep} />
        {activeStep === 0 ? <AgentIdentification setActiveStep={setActiveStep} /> : null}
        {activeStep === 1 ? <CallerIdentification setActiveStep={setActiveStep} /> : null}
        {activeStep === 2 ? <ResponsibleParty setActiveStep={setActiveStep} /> : null}
        {activeStep === 3 ? <VehicleIdentification setActiveStep={setActiveStep} /> : null}
        {activeStep === 4 ? <HazardAssessment setActiveStep={setActiveStep} /> : null}
        {activeStep === 5 ? <VehicleDamageAssessment setActiveStep={setActiveStep} /> : null}
        {activeStep === 6 ? <HVDamageAssessment setActiveStep={setActiveStep} /> : null}
      </div>
    </>
  );
};

export default Session;
