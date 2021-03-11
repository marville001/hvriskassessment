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
import { updateSessionState , getCurrentSession} from "../_actions";
import Loading from "../components/Session/Loading";
import Error from "../components/Session/Error";

const Session = (props) => {
  const dispatch = useDispatch();
  const { loading, error, session } = useSelector(
    (state) => state.sessionReducer
  );

  const { user } = useSelector((state) => state.userReducer);

  const [activeStep, setActiveStep] = useState(null);
  const [sessionState, setSessionState] = useState("");

  // Caller identification
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [organization_address, setOAddress] = useState("");
  const [organization_number, setONumber] = useState("");
  const [location, setLocation] = useState("");
  const [organization, setOrganization] = useState("");

  // Responsible Party
  const [rpname, setRPName] = useState("");
  const [rpnumber, setRPNumber] = useState("");
  const [policy, setPolicy] = useState("");
  const [cNumber, setCNumber] = useState("");
  const [rpaddress, setRPAddress] = useState("");
  const [insprovider, setIProvider] = useState("");

  const sessionId = props.match.params.sessionid;

  useEffect(() => {
    if (!user._id) {
      window.location.href = "/login?continue=/session/" + sessionId;
    }
  }, [user]);
  useEffect(() => {
    dispatch(getCurrentSession(props.match.params.sessionid));
  }, []);
  useEffect(() => {
    setActiveStep(session.step);
    setSessionState(session.state);
  }, [session]);

  const changeSessionState = (step, state) => {
    dispatch(updateSessionState({ step, state, sessionId }));
  };

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
                      changeSessionState={changeSessionState}
                    />
                  ) : null}
                  {activeStep === 1 ? (
                    <CallerIdentification
                      activeStep={activeStep}
                      setName={setName}
                      setNumber={setNumber}
                      setEmail={setEmail}
                      setSupervisor={setSupervisor}
                      setOAddress={setOAddress}
                      setONumber={setONumber}
                      setLocation={setLocation}
                      setOrganization={setOrganization}
                      number={number}
                      name={name}
                      email={email}
                      sup={supervisor}
                      oa={organization_address}
                      on={organization_number}
                      loc={location}
                      org={organization}
                      changeSessionState={changeSessionState}
                    />
                  ) : null}
                  {activeStep === 2 ? (
                    <ResponsibleParty
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                      rpname={rpname}
                      rpnumber={rpnumber}
                      policy={policy}
                      cNumber={cNumber}
                      rpaddress={rpaddress}
                      insprovider={insprovider}
                      setRPName={setRPName}
                      setRPNumber={setRPNumber}
                      setPolicy={setPolicy}
                      setCNumber={setCNumber}
                      setRPAddress={setRPAddress}
                      setIProvider={setIProvider}
                      changeSessionState={changeSessionState}
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
