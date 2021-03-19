import axios from "axios";
import {
  RPARTY_ADD_FAILED,
  RPARTY_ADD_REQUEST,
  RPARTY_ADD_SUCCESS,
  GET_RPARTY_FAILED,
  GET_RPARTY_REQUEST,
  GET_RPARTY_SUCCESS,
  UPDATE_RPARTY_FAILED,
  UPDATE_RPARTY_REQUEST,
  UPDATE_RPARTY_SUCCESS,
} from "../constants/rPartyConstants";

import api from "./values";

const addRParty = (rparty) => async (dispatch) => {
  dispatch({ type: RPARTY_ADD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.post(`${api}/api/rparty/`, rparty, {
      headers: { "x-auth-token": token },
    });

    dispatch({ type: RPARTY_ADD_SUCCESS, rparty: data.rparty });
  } catch (error) {
    dispatch({
      type: RPARTY_ADD_FAILED,
      error: error.response.data.message,
    });
  }
};

const getRParty = (sessionId) => async (dispatch) => {
  dispatch({ type: GET_RPARTY_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      `${api}/api/rparty/${sessionId}`,
      { name: "RPARTY" },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: GET_RPARTY_SUCCESS, rparty: data.rparty });
  } catch (error) {
    dispatch({
      type: GET_RPARTY_FAILED,
      error: error.response.data.message,
    });
  }
};

const updateRParty = (rparty, id) => async (dispatch) => {
  dispatch({ type: UPDATE_RPARTY_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(`${api}/api/rparty/${id}`, rparty, {
      headers: { "x-auth-token": token },
    });

    dispatch({ type: UPDATE_RPARTY_SUCCESS, rparty: data.rparty });
  } catch (error) {
    dispatch({
      type: UPDATE_RPARTY_FAILED,
      error: error.response.data.message,
    });
  }
};

export { addRParty, getRParty, updateRParty };
