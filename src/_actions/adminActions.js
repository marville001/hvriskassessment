import {
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_FAILED,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_LOGOUT,
} from "./types";

import Axios from "axios";
import {
  ALL_ADMIN_FAILED,
  ALL_ADMIN_SUCCESS,
  ALL_ADMIN_REQUEST,
  ALL_EMPLOYEES_FAILED,
  ALL_EMPLOYEES_SUCCESS,
  ALL_EMPLOYEES_REQUEST,
  ALL_SESSIONS_FAILED,
  ALL_SESSIONS_SUCCESS,
  ALL_SESSIONS_REQUEST,
  ALL_CALLERS_FAILED,
  ALL_CALLERS_SUCCESS,
  ALL_CALLERS_REQUEST,
  ADD_ADMIN_REQUEST,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_FAILED,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILED,
} from "../constants/adminConstants";

import api from "./values";

const adminLogin = (admin) => async (dispatch) => {
  dispatch({ type: ADMIN_SIGNIN_REQUEST });
  try {
    const { data } = await Axios.post(api + "/api/admin/auth", admin);
    localStorage.setItem("adminToken", data.token);

    dispatch(loginAdmin(data.admin));
  } catch (error) {
    dispatch({
      type: ADMIN_SIGNIN_FAILED,
      error: error.response.data.message,
    });
    localStorage.removeItem("adminToken");
  }
};

const addAdmin = (admin) => async (dispatch) => {
  dispatch({ type: ADD_ADMIN_REQUEST });
  const adminToken = localStorage.getItem("adminToken");
  try {
    const { data } = await Axios.post(api + "/api/admin/", admin, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": adminToken,
      },
    });
    dispatch({
      type: ADD_ADMIN_SUCCESS,
      admin: data.admin,
    });
  } catch (error) {
    dispatch({
      type: ADD_ADMIN_FAILED,
      error: error.response.data.message,
    });
  }
};

const addEmployee = (user) => async (dispatch) => {
  dispatch({ type: ADD_EMPLOYEE_REQUEST });
  const adminToken = localStorage.getItem("adminToken");
  try {
    const { data } = await Axios.post(api + "/api/users/", user, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": adminToken,
      },
    });
    dispatch({
      type: ADD_EMPLOYEE_SUCCESS,
      employee: data.user,
    });
  } catch (error) {
    dispatch({
      type: ADD_EMPLOYEE_FAILED,
      error: error.response.data.message,
    });
  }
};

const getLogedInAdmin = () => async (dispatch) => {
  const adminToken = localStorage.getItem("adminToken");
  if (adminToken) {
    try {
      const { data } = await Axios.get(api + "/api/admin/me", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": adminToken,
        },
      });
      dispatch(loginAdmin(data.admin));
    } catch (error) {
      dispatch({
        type: ADMIN_SIGNIN_FAILED,
        error: error.response.data.message,
      });
    }
  }
};

const getAllAdmins = () => async (dispatch) => {
  dispatch({ type: ALL_ADMIN_REQUEST });
  const adminToken = localStorage.getItem("adminToken");
  try {
    const { data } = await Axios.get(api + "/api/admin/all", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": adminToken,
      },
    });
    dispatch({
      type: ALL_ADMIN_SUCCESS,
      admins: data.admins,
    });
  } catch (error) {
    dispatch({
      type: ALL_ADMIN_FAILED,
      error: error.response.data.message,
    });
  }
};

const getAllEmployees = () => async (dispatch) => {
  dispatch({ type: ALL_EMPLOYEES_REQUEST });
  const adminToken = localStorage.getItem("adminToken");
  try {
    const { data } = await Axios.get(api + "/api/admin/employees/all", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": adminToken,
      },
    });
    dispatch({
      type: ALL_EMPLOYEES_SUCCESS,
      employees: data.employees,
    });
  } catch (error) {
    dispatch({
      type: ALL_EMPLOYEES_FAILED,
      error: error.response.data.message,
    });
  }
};

const getAllSessions = () => async (dispatch) => {
  dispatch({ type: ALL_SESSIONS_REQUEST });
  const adminToken = localStorage.getItem("adminToken");
  try {
    const { data } = await Axios.get(api + "/api/admin/sessions/all", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": adminToken,
      },
    });
    dispatch({
      type: ALL_SESSIONS_SUCCESS,
      sessions: data.sessions,
    });
  } catch (error) {
    dispatch({
      type: ALL_SESSIONS_FAILED,
      error: error.response.data.message,
    });
  }
};

const getAllcallers = () => async (dispatch) => {
  dispatch({ type: ALL_CALLERS_REQUEST });
  const adminToken = localStorage.getItem("adminToken");
  try {
    const { data } = await Axios.get(api + "/api/admin/callers/all", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": adminToken,
      },
    });
    dispatch({
      type: ALL_CALLERS_SUCCESS,
      callers: data.callers,
    });
  } catch (error) {
    dispatch({
      type: ALL_CALLERS_FAILED,
      error: error.response.data.message,
    });
  }
};

const loginAdmin = (admin) => ({
  type: ADMIN_SIGNIN_SUCCESS,
  admin,
});

const logoutAdmin = () => (dispatch) => {
  dispatch({ type: ADMIN_LOGOUT });
  localStorage.removeItem("adminToken");
};

export {
  adminLogin,
  getLogedInAdmin,
  logoutAdmin,
  getAllAdmins,
  getAllEmployees,
  getAllSessions,
  getAllcallers,
  addAdmin,
  addEmployee,
};
