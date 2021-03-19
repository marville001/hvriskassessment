import axios from "axios";
import {
  GET_CALLER_REQUEST,
  GET_CALLER_SUCCESS,
  GET_CALLER_FAILED,
  ADD_CALLER_REQUEST,
  ADD_CALLER_SUCCESS,
  ADD_CALLER_FAILED,
  UPDATE_CALLER_REQUEST,
  UPDATE_CALLER_SUCCESS,
  UPDATE_CALLER_FAILED,
} from "../constants/callerConstants";

import api from "./values";

const getCaller = (sessionId) => async (dispatch) => {
  dispatch({ type: GET_CALLER_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      `${api}/api/caller/${sessionId}`,
      { name: "CALLER" },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: GET_CALLER_SUCCESS, caller: data.caller });
  } catch (error) {
    dispatch({
      type: GET_CALLER_FAILED,
      error: error.response.data.message,
    });
  }
};

const addCaller = (caller) => async (dispatch) => {
  dispatch({ type: ADD_CALLER_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.post(`${api}/api/caller/`, caller, {
      headers: { "x-auth-token": token },
    });

    dispatch({ type: ADD_CALLER_SUCCESS, caller: data.caller });
  } catch (error) {
    dispatch({
      type: ADD_CALLER_FAILED,
      error: error.response.data.message,
    });
  }
};

const updateCaller = (caller, id) => async (dispatch) => {
  dispatch({ type: UPDATE_CALLER_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(`${api}/api/caller/${id}`, caller, {
      headers: { "x-auth-token": token },
    });

    dispatch({ type: UPDATE_CALLER_SUCCESS, caller: data.caller });
  } catch (error) {
    dispatch({
      type: UPDATE_CALLER_FAILED,
      error: error.response.data.message,
    });
  }
};

export { getCaller, addCaller, updateCaller };
