/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";

import {
  AgentIdentification,
  CallerIdentification,
  ResponsibleParty,
  VehicleIdentification,
  HazardAssessment,
  VehicleDamageAssessment,
  HVDamageAssessment,
} from "../../components";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PausedSession from "../../components/Session/PausedSession";
import {
  updateSessionState,
  getCurrentSession,
  getVehicleMake,
} from "../../_actions";
import Loading from "../../components/Session/Loading";
import Error from "../../components/Session/Error";
import EndedSession from "../../components/Session/EndedSession";

const SessionHome = (props) => {
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

  // Vehicle Details
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [lpstate, setLPState] = useState("");
  const [licence, setLicence] = useState("");

  const sessionId = props.match.params.sessionid;

  useEffect(() => {
    if (!user._id) {
      window.location.href = "/login?continue=/session/" + sessionId;
    }
  }, [user]);

  useEffect(() => {
    dispatch(getCurrentSession(props.match.params.sessionid));
    dispatch(getVehicleMake());
  }, []);

  useEffect(() => {
    setActiveStep(session.step);
    setSessionState(session.state);
  }, [session]);

  const changeSessionState = (step, state) => {
    dispatch(updateSessionState({ step, state, sessionId }));
  };

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : !session._id ? (
        <h4 className="text-center">No Session Found with given id</h4>
      ) : (
        sessionState === "ongoing" && (
          <Card style={{ margin: "-18px", border: "0px", borderRadius: "0px" }}>
            <Card.Header className="bg-white">
              <h4 className="text-dark">HV Risk Assessment - </h4>
            </Card.Header>
            <Card.Body>
              {/* <SessionProgress activeStep={activeStep} /> */}
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
                  sessionId={sessionId}
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
                  sessionId={sessionId}
                />
              ) : null}
              {activeStep === 3 ? (
                <VehicleIdentification
                  activeStep={activeStep}
                  changeSessionState={changeSessionState}
                  sessionId={sessionId}
                  make={make}
                  model={model}
                  year={year}
                  vin={vin}
                  lpstate={lpstate}
                  licence={licence}
                  setMake={setMake}
                  setModel={setModel}
                  setYear={setYear}
                  setVin={setVin}
                  setLPState={setLPState}
                  setLicence={setLicence}
                />
              ) : null}
              {activeStep === 4 ? (
                <HazardAssessment
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  sessionId={sessionId}
                  changeSessionState={changeSessionState}
                />
              ) : null}
              {activeStep === 5 ? (
                <VehicleDamageAssessment
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  sessionId={sessionId}
                  changeSessionState={changeSessionState}
                />
              ) : null}
              {activeStep === 6 ? (
                <HVDamageAssessment
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  sessionId={sessionId}
                  changeSessionState={changeSessionState}
                />
              ) : null}
            </Card.Body>
          </Card>
        )
      )}
      {sessionState === "paused" && (
        <PausedSession
          sessionId={sessionId}
        />
      )}
      {sessionState === "ended" && <EndedSession />}
    </Wrapper>
  );
};

export default SessionHome;
