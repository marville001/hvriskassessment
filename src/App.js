/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
// import {dotenv}  from 'dotenv'
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Session from "./pages/Session";
import { getProfileFetch } from "./_actions/userActions";
import NotFound from "./pages/NotFound";
import { getCurrentSession } from "./_actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileFetch());
    dispatch(getCurrentSession());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/session/:sessionid" component={Session} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
