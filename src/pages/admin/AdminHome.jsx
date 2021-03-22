/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import AdminNavBar from "./components/AdminNavbar";
import Dashboard from "./components/Dashboard";
import AdminLogin from "./AdminLogin";
import Users from "./components/Users";
import { useDispatch } from "react-redux";
import {
  getAllAdmins,
  getAllcallers,
  getAllEmployees,
  getAllSessions,
  getLogedInAdmin,
  getVehicleMake,
} from "../../_actions";
import Sessions from "./components/Sessions";
import AdminSidebar from "./components/AdminSidebar";
import Make from "./components/Make";

const AdminHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicleMake());
    dispatch(getLogedInAdmin());
    dispatch(getAllAdmins());
    dispatch(getAllEmployees());
    dispatch(getAllSessions());
    dispatch(getAllcallers());
  }, []);
  return (
    <div>
      <AdminNavBar />
      <div className="main-dash-container">
        <AdminSidebar />
        <div className="main-dash-content">
          <Switch>
            <Route exact path="/admin" component={Dashboard} />
            <Route path="/admin/sessions" component={Sessions} />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/make" component={Make} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>

      <AdminLogin />
    </div>
  );
};

export { AdminHome };
