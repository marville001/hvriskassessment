/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import { Card, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PausedSession from "../components/Session/PausedSession";
import { loadCurrentSession } from "../_actions";
import Loading from "../components/Session/Loading";
import Error from "../components/Session/Error";

const Session = (props) => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [sessionState, setSessionState] = useState("ongoing");
  const { loading, error } = useSelector((state) => state.sessionReducer);
  const { user } = useSelector((state) => state.userReducer);

  const sessionId = props.match.params.sessionid;
  useEffect(() => {
    dispatch(loadCurrentSession(sessionId));
  }, []);

  useEffect(() => {
    if (!user._id) {
      window.location.href = "/login?continue=/session/" + sessionId;
    }
  }, [user]);

  return (
    <>
      <NavBar />
      <div style={{ marginTop: "10vh" }}>
        <Container style={{ padding: "20px 10px" }} fluid>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error={error} />
          ) : (
            sessionState === "ongoing" && (
              <Card>
                <Card.Header className="bg-primary">
                  <h4 className="text-white text-center">
                    HV Risk Assessment -{" "}
                  </h4>
                </Card.Header>
                <Card.Body>
                  <SessionProgress activeStep={activeStep} />
                  {activeStep === 0 ? (
                    <AgentIdentification
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                      setSessionState={setSessionState}
                    />
                  ) : null}
                  {activeStep === 1 ? (
                    <CallerIdentification
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  ) : null}
                  {activeStep === 2 ? (
                    <ResponsibleParty
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  ) : null}
                  {activeStep === 3 ? (
                    <VehicleIdentification
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  ) : null}
                  {activeStep === 4 ? (
                    <HazardAssessment
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  ) : null}
                  {activeStep === 5 ? (
                    <VehicleDamageAssessment
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  ) : null}
                  {activeStep === 6 ? (
                    <HVDamageAssessment
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  ) : null}
                </Card.Body>
              </Card>
            )
          )}
          {sessionState === "paused" && <PausedSession />}
        </Container>
      </div>
    </>
  );
};

export default Session;
