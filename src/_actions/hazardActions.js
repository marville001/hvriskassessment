import axios from "axios";

import {
  CHANGE_HAZARD_FAILED,
  CHANGE_HAZARD_REQUEST,
  CHANGE_HAZARD_SUCCESS,
} from "../constants/hazardConstants";

import api from "./values";

const getHazard = (sessionId) => async (dispatch) => {
  dispatch({ type: CHANGE_HAZARD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      `${api}/api/hazard/${sessionId}`,
      { name: "Hazard" },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HAZARD_SUCCESS, hazard: data.hazard });
  } catch (error) {
    dispatch({
      type: CHANGE_HAZARD_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeOnfire = (onfire) => async (dispatch) => {
  const { id, state } = onfire;
  dispatch({ type: CHANGE_HAZARD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hazard/onfire`,
      { id, onfire: state },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: CHANGE_HAZARD_SUCCESS, hazard: data.hazard });
  } catch (error) {
    dispatch({
      type: CHANGE_HAZARD_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeSmoking = (smoking) => async (dispatch) => {
  const { id, state } = smoking;
  dispatch({ type: CHANGE_HAZARD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hazard/smoking`,
      { id, smoking: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HAZARD_SUCCESS, hazard: data.hazard });
  } catch (error) {
    dispatch({
      type: CHANGE_HAZARD_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeSound = (anysound) => async (dispatch) => {
  const { id, state } = anysound;
  dispatch({ type: CHANGE_HAZARD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hazard/anysound`,
      { id, anysound: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HAZARD_SUCCESS, hazard: data.hazard });
  } catch (error) {
    dispatch({
      type: CHANGE_HAZARD_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeSmell = (anysmell) => async (dispatch) => {
  const { id, state } = anysmell;
  dispatch({ type: CHANGE_HAZARD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hazard/anysmell`,
      { id, anysmell: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HAZARD_SUCCESS, hazard: data.hazard });
  } catch (error) {
    dispatch({
      type: CHANGE_HAZARD_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeElectricShutdown = (electricshutdown) => async (dispatch) => {
  const { id, state } = electricshutdown;
  dispatch({ type: CHANGE_HAZARD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hazard/electricshutdown`,
      { id, electricshutdown: state },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: CHANGE_HAZARD_SUCCESS, hazard: data.hazard });
  } catch (error) {
    dispatch({
      type: CHANGE_HAZARD_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeShutdown = (shutdown) => async (dispatch) => {
  dispatch({ type: CHANGE_HAZARD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(`${api}/api/hazard/shutdown`, shutdown, {
      headers: { "x-auth-token": token },
    });
    dispatch({ type: CHANGE_HAZARD_SUCCESS, hazard: data.hazard });
  } catch (error) {
    dispatch({
      type: CHANGE_HAZARD_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeLevel = (level) => async (dispatch) => {
  dispatch({ type: CHANGE_HAZARD_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(`${api}/api/hazard/level`, level, {
      headers: { "x-auth-token": token },
    });
    dispatch({ type: CHANGE_HAZARD_SUCCESS, hazard: data.hazard });
  } catch (error) {
    dispatch({
      type: CHANGE_HAZARD_FAILED,
      error: error.response.data.message,
    });
  }
};

export {
  getHazard,
  changeOnfire,
  changeSmoking,
  changeSmell,
  changeSound,
  changeElectricShutdown,
  changeShutdown,
  changeLevel,
};
