import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  LOGOUT_USER,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILED,
} from "./types";
import Axios from "axios";

import api from "./values";

const userLogin = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: user });
  try {
    const { data } = await Axios.post(api + "/api/auth", user);
    localStorage.setItem("token", data.token);
    dispatch(loginUser(data.user));
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({ type: USER_SIGNIN_FAILED, error: error.response.data.message });
  }
};

const getProfileFetch = () => (dispatch) => {
  const token = localStorage.token;
  if (token) {
    fetch(api + "/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(loginUser(data.user));
      })
      .catch((error) => {
        localStorage.removeItem("token");
      });
  }
};
const loginUser = (user) => ({
  type: USER_SIGNIN_SUCCESS,
  user,
});

const updateEmployee = (user, id) => async (dispatch) => {
  dispatch({ type: UPDATE_EMPLOYEE_REQUEST });
  const adminToken = localStorage.getItem("adminToken");
  try {
    const { data } = await Axios.put(api + "/api/users/" + id, user, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": adminToken,
      },
    });
    dispatch({
      type: UPDATE_EMPLOYEE_SUCCESS,
      user: data.user,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EMPLOYEE_FAILED,
      error: error.response.data.message,
    });
  }
};

const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("sessionid");
  dispatch({
    type: LOGOUT_USER,
  });
};

export { userLogin, getProfileFetch, logoutUser, updateEmployee };
