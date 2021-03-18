import React from "react";
import { Button } from "react-bootstrap";

const PausedSession = ({ activeStep, changeSessionState }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "60vh",
        justifyContent: "center",
      }}
    >
      <h3>Session paused temporarily</h3>
      <Button onClick={() => changeSessionState(activeStep, "ongoing")}>
        Resume
      </Button>
    </div>
  );
};

export default PausedSession;
