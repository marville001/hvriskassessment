import React from "react";
import { Button } from "react-bootstrap";
import Wrapper from "../components/Wrapper";

const FinalSessionStep = (props) => {
  const sessionid = props.history.location.search.split("=")[1];
  if (!sessionid)
    return (
      <Wrapper>
        <h4>No session id given</h4>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 className="text-center">Session has ended. an email has been sent to the caller</h4>
        <Button href="/sessions">Co to Dashboard</Button>
      </div>
    </Wrapper>
  );
};

export default FinalSessionStep;
