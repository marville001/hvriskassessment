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
} from "../constants/adminConstants";

import api from './values'

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

const loginAdmin = (admin) => ({
  type: ADMIN_SIGNIN_SUCCESS,
  admin,
});

const logoutAdmin = () => (dispatch) => {
  dispatch({ type: ADMIN_LOGOUT });
  localStorage.removeItem("adminToken");
};

export { adminLogin, getLogedInAdmin, logoutAdmin,getAllAdmins,getAllEmployees };
