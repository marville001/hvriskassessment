import {
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILED,
  CURRENT_SESSION_REQUEST,
  CURRENT_SESSION_SUCCESS,
  CURRENT_SESSION_FAILED,
  ALL_SESSION_REQUEST,
  ALL_SESSION_SUCCESS,
  ALL_SESSION_FAILED,
  UPDATE_SESSION_REQUEST,
  UPDATE_SESSION_SUCCESS,
  UPDATE_SESSION_FAILED,
  VEHICLE_MAKE_REQUEST,
  VEHICLE_MAKE_SUCCESS,
  VEHICLE_MAKE_FAILED,
  CHANGE_SESSIONS_COUNT,
  CHANGE_SESSIONS_KEYWORD,
  CHANGE_SESSIONS_STATE,
  CHANGE_SESSIONS_SEARCHBY,
} from "./types";
import Axios from "axios";

import api from "./values";

const changeSessionCount = (count) => async (dispatch) => {
  dispatch({
    type: CHANGE_SESSIONS_COUNT,
    count: count,
  });
};

const changeSessionKeyword = (keyword) => async (dispatch) => {
  dispatch({
    type: CHANGE_SESSIONS_KEYWORD,
    keyword: keyword,
  });
};

const changeSessionState = (state) => async (dispatch) => {
  dispatch({
    type: CHANGE_SESSIONS_STATE,
    state: state,
  });
};

const changeSessionSearchBy = (searchby) => async (dispatch) => {
  dispatch({
    type: CHANGE_SESSIONS_SEARCHBY,
    searchby: searchby,
  });
};

const createSession = (session) => async (dispatch) => {
  dispatch({ type: CREATE_SESSION_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await Axios.post(`${api}/api/session/create`, session, {
      headers: { "x-auth-token": token },
    });

    localStorage.setItem("sessionid", data.result._id);
    dispatch({ type: CREATE_SESSION_SUCCESS, session: data.result });
    window.location.href = `session/${data.result._id}`;
  } catch (error) {
    dispatch({
      type: CREATE_SESSION_FAILED,
      error: error.response.data.message,
    });
  }
};

const getCurrentSession = (sessionId) => async (dispatch) => {
  // const sessionId = localStorage.getItem("sessionid");
  if (sessionId) {
    dispatch({ type: CURRENT_SESSION_REQUEST });
    try {
      const { data } = await Axios.get(`${api}/api/session/${sessionId}`);
      dispatch({ type: CURRENT_SESSION_SUCCESS, session: data.session });
    } catch (error) {
      localStorage.removeItem("sessionid");
      dispatch({
        type: CURRENT_SESSION_FAILED,
        payload: error.response.data.message,
      });
    }
  }
};

const getVehicleMake = () => async (dispatch) => {
  dispatch({ type: VEHICLE_MAKE_REQUEST });
  try {
    const { data } = await Axios.get(`${api}/api/defaults/make`);
    dispatch({ type: VEHICLE_MAKE_SUCCESS, make: data.make.make });
  } catch (error) {
    dispatch({
      type: VEHICLE_MAKE_FAILED,
      error: error.response.data.message,
    });
  }
};

const loadAllSessions = (empId, count, key, state, searchby) => async (dispatch) => {
  if (empId) {
    dispatch({ type: ALL_SESSION_REQUEST });
    const token = localStorage.getItem("token");
    try {
      const { data } = await Axios.post(
        `${api}/api/session/all?count=${count}&key=${key}&state=${state}&key=${key}&searchby=${searchby}`,
        { empid: empId },
        {
          headers: { "x-auth-token": token },
        }
      );
      dispatch({ type: ALL_SESSION_SUCCESS, sessions: data.sessions });
    } catch (error) {
      dispatch({
        type: ALL_SESSION_FAILED,
        error: error.response.data.message,
      });
    }
  }
};

const updateSessionState = ({ step, state, sessionId }) => async (dispatch) => {
  const token = localStorage.token;
  dispatch({ type: UPDATE_SESSION_REQUEST });
  try {
    const { data } = await Axios.put(
      `${api}/api/session/updatesession/${sessionId}`,
      {
        step,
        state,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    dispatch({ type: UPDATE_SESSION_SUCCESS, session: data.session });
  } catch (error) {
    dispatch({
      type: UPDATE_SESSION_FAILED,
      error: error.response.data.message,
    });
  }
};

const pauseSession = ({ sessionId }) => async (dispatch) => {
  const token = localStorage.token;
  dispatch({ type: UPDATE_SESSION_REQUEST });
  try {
    const { data } = await Axios.put(
      `${api}/api/session/pause/${sessionId}`,
      {
        state: "paused",
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    dispatch({ type: UPDATE_SESSION_SUCCESS, session: data.session });
  } catch (error) {
    dispatch({
      type: UPDATE_SESSION_FAILED,
      error: error.response.data.message,
    });
  }
};

export {
  createSession,
  getCurrentSession,
  loadAllSessions,
  updateSessionState,
  getVehicleMake,
  pauseSession,
  changeSessionCount,
  changeSessionKeyword,
  changeSessionState,changeSessionSearchBy
};
