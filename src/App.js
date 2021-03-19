/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Session from "./pages/Session";
import Sessions from "./pages/Sessions";
import { AdminHome } from "./pages/admin";
import { getProfileFetch } from "./_actions/userActions";
import NotFound from "./pages/NotFound";
import { loadAllSessions } from "./_actions";
import AuthenticateLogin from "./pages/AuthenticateLogin";
import FinalSessionStep from "./pages/FinalSessionStep";
import Upload from "./pages/Upload";
import EmployeeProfile from "./pages/EmployeeProfile";
// import SessionHome from "./pages/session/SessionHome";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { sessionsCount, keyword, state, searchby } = useSelector(
    (state) => state.sessionReducer
  );
  useEffect(() => {
    dispatch(getProfileFetch());
  }, []);

  useEffect(() => {
    if (user._id) {
      dispatch(
        loadAllSessions(user.idnumber, sessionsCount, keyword, state, searchby)
      );
    }
  }, [user]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AuthenticateLogin>
            <Home />
          </AuthenticateLogin>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/profile" component={EmployeeProfile} />
        <Route path="/sessions" component={Sessions} />
        <Route path="/session/:sessionid" component={Session} />
        <Route path="/sessionend" component={FinalSessionStep} />
        <Route path="/admin" component={AdminHome} />
        <Route path="/upload/:sessionid" component={Upload} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
