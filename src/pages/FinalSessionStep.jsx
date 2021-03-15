import React from "react";
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
      <h4>Session has ended. A link will be sent to the caller</h4>
    </Wrapper>
  );
};

export default FinalSessionStep;
