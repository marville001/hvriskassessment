import {
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILED,
  CURRENT_SESSION_REQUEST,
  CURRENT_SESSION_SUCCESS,
  CURRENT_SESSION_FAILED,
} from "./types";
import Axios from "axios";

const createSession = (session) => async (dispatch) => {
  dispatch({ type: CREATE_SESSION_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await Axios.post(`/api/session/create`, session, {
      headers: { "x-auth-token": token },
    });
    localStorage.setItem("sessionid", data.result._id);
    dispatch({ type: CREATE_SESSION_SUCCESS, session: data.result });
  } catch (error) {
    dispatch({
      type: CREATE_SESSION_FAILED,
      error: error.response.data.message,
    });
  }
};

const getCurrentSession = () => async (dispatch) => {
  const sessionId = localStorage.getItem("sessionid");
  if (sessionId) {
    dispatch({ type: CURRENT_SESSION_REQUEST });
    try {
      const { data } = await Axios.get(`/api/session/${sessionId}`);
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

const loadCurrentSession = (sessionId) => async (dispatch) => {
  localStorage.removeItem("sessionid");
  if (sessionId) {
    dispatch({ type: CURRENT_SESSION_REQUEST });
    try {
      const { data } = await Axios.get(`/api/session/${sessionId}`);
      localStorage.setItem("sessionid", data.session._id);
      dispatch({ type: CURRENT_SESSION_SUCCESS, session: data.session });
    } catch (error) {
      dispatch({
        type: CURRENT_SESSION_FAILED,
        error: error.response.data.message,
      });
    }
  }
};

export { createSession, getCurrentSession,loadCurrentSession };
