import axios from "axios";
import {
  CHANGE_VDAMAGE_FAILED,
  CHANGE_VDAMAGE_REQUEST,
  CHANGE_VDAMAGE_SUCCESS,
} from "../constants/vDamageConstants";

// Online db
// const api = "https://hvriskassessment.herokuapp.com";

// offline db
const api = "http://localhost:5005";

const getVdamage = (sessionId) => async (dispatch) => {
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      `${api}/api/vdamage/${sessionId}`,
      { name: "VDAMAGE" },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changePosition = (position) => async (dispatch) => {
  const { id, state } = position;
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/vdamage/position`,
      { id, position: state },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeDamaged = (damaged) => async (dispatch) => {
  const { id, state } = damaged;
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/vdamage/damaged`,
      { id, damaged: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeSubmerged = (submerged) => async (dispatch) => {
  const { id, state } = submerged;
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/vdamage/submerged`,
      { id, submerged: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeBAreaFlooded = (bareaflooded) => async (dispatch) => {
  const { id, state } = bareaflooded;
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/vdamage/bareaflooded`,
      { id, bareaflooded: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeVOnFire = (onfire) => async (dispatch) => {
  const { id, state } = onfire;
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/vdamage/onfire`,
      { id, onfire: state },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeSeverity = (severity) => async (dispatch) => {
  const { id, state } = severity;
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/vdamage/severity`,
      { id, severity: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeAirBagDeploys = (airbagdeploys) => async (dispatch) => {
  const { id, state } = airbagdeploys;
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/vdamage/airbagdeploys`,
      { id, airbagdeploys: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeWhichAirBag = (whichairbag) => async (dispatch) => {
  const { id, state } = whichairbag;
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/vdamage/whichairbag`,
      { id, whichairbag: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeAnyPartOfHvExposed = (anypartofhvexposed) => async (dispatch) => {
  const { id, state } = anypartofhvexposed;
  dispatch({ type: CHANGE_VDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/vdamage/anypartofhvexposed`,
      { id, anypartofhvexposed: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_VDAMAGE_SUCCESS, vdamage: data.vdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_VDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

export {
  getVdamage,
  changePosition,
  changeDamaged,
  changeBAreaFlooded,
  changeSubmerged,
  changeVOnFire,
  changeSeverity,
  changeAirBagDeploys,
  changeWhichAirBag,
  changeAnyPartOfHvExposed
};
