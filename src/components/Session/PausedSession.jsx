import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import api from "../../_actions/values";

const PausedSession = ({ sessionId }) => {
  const resumeSession = async () => {
    const token = localStorage.token;
    try {
      await axios.put(
        `${api}/api/session/resume/${sessionId}`,
        {
          state: "ongoing",
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      const page = window.location.href;
      window.location.href = page;
    } catch (error) {}
  };

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
      <Button onClick={resumeSession}>Resume</Button>
    </div>
  );
};

export default PausedSession;
