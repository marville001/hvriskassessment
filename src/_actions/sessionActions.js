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
  CALLER_ADD_REQUEST,
  CALLER_ADD_SUCCESS,
  CALLER_ADD_FAILED,
  RPARTY_ADD_REQUEST,
  RPARTY_ADD_SUCCESS,
  RPARTY_ADD_FAILED,
} from "./types";
import Axios from "axios";

// Online db
const api ="https://hvriskassessment.herokuapp.com"

// offline db
// const api = "http://localhost:5005";

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

const addCallerDetails = (caller) => async (dispatch) => {
  dispatch({ type: CALLER_ADD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await Axios.post(
      `${api}/api/session/caller-details`,
      caller,
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: CALLER_ADD_SUCCESS, caller: data.caller });
  } catch (error) {
    dispatch({
      type: CALLER_ADD_FAILED,
      error: error.response.data.message,
    });
  }
};

const addRPartyDetails = (rparty) => async (dispatch) => {
  dispatch({ type: RPARTY_ADD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await Axios.post(
      `${api}/api/session/rparty-details`,
      rparty,
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: RPARTY_ADD_SUCCESS, rparty: data.rparty });
  } catch (error) {
    dispatch({
      type: RPARTY_ADD_FAILED,
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

const loadAllSessions = (empId) => async (dispatch) => {
  if (empId) {
    dispatch({ type: ALL_SESSION_REQUEST });
    const token = localStorage.getItem("token");
    try {
      const { data } = await Axios.post(
        `${api}/api/session/all/`,
        { empid: empId },
        {
          headers: { "x-auth-token": token },
        }
      );
      dispatch({ type: ALL_SESSION_SUCCESS, sessions: data.sessions });

      // let session = {};
      // let filtered_sessions = data.sessions.filter(
      //   (session) => session.state === "ongoing"
      // );
      // session = { ...filtered_sessions[0] };

      // dispatch({ type: CREATE_SESSION_SUCCESS, session });
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

export {
  createSession,
  getCurrentSession,
  loadAllSessions,
  updateSessionState,
  addCallerDetails,addRPartyDetails
};
