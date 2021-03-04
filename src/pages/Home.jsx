import React from "react";
import NavBar from "../components/Navbar";
import {Button} from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "10vh" }}>
        <div className="session-button-container">
        <Button
              className="session-button"
                // style={{ width: "150px" }}
                variant="primary"
                type="submit"
              >
                Start Session
              </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
