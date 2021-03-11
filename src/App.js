/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch,useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Session from "./pages/Session";
import { getProfileFetch } from "./_actions/userActions";
import NotFound from "./pages/NotFound";
import { loadAllSessions } from "./_actions";
import AuthenticateLogin from "./pages/AuthenticateLogin";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getProfileFetch());
    
  }, []);

  useEffect(() => {
    if(user._id){
      dispatch(loadAllSessions(user.idnumber));
    }
  }, [user]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AuthenticateLogin>
            <Home/>
          </AuthenticateLogin>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/session/:sessionid" component={Session} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
