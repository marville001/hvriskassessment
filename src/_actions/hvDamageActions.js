import axios from "axios";
import {
  CHANGE_HVDAMAGE_FAILED,
  CHANGE_HVDAMAGE_REQUEST,
  CHANGE_HVDAMAGE_SUCCESS,
} from "../constants/hvDamageConstants";

// Online db
// const api = "https://hvriskassessment.herokuapp.com";

// offline db
const api = "http://localhost:5005";

const getHVdamage = (sessionId) => async (dispatch) => {
  dispatch({ type: CHANGE_HVDAMAGE_REQUEST });

  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      `${api}/api/hvdamage/${sessionId}`,
      { name: "HVDAMAGE" },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: CHANGE_HVDAMAGE_SUCCESS, hvdamage: data.hvdamage });

  } catch (error) {
    dispatch({
      type: CHANGE_HVDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeBatteryDamaged = (batterydamaged) => async (dispatch) => {
  const { id, state } = batterydamaged;
  dispatch({ type: CHANGE_HVDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hvdamage/batterydamaged`,
      { id, batterydamaged: state },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: CHANGE_HVDAMAGE_SUCCESS, hvdamage: data.hvdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_HVDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeLeakingFluid = (leakingfluid) => async (dispatch) => {
  const { id, state } = leakingfluid;
  dispatch({ type: CHANGE_HVDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hvdamage/leakingfluid`,
      { id, leakingfluid: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HVDAMAGE_SUCCESS, hvdamage: data.hvdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_HVDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeAnySmoke = (anysmoke) => async (dispatch) => {
  const { id, state } = anysmoke;
  dispatch({ type: CHANGE_HVDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hvdamage/anysmoke`,
      { id, anysmoke: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HVDAMAGE_SUCCESS, hvdamage: data.hvdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_HVDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeOdor = (odor) => async (dispatch) => {
  const { id, state } = odor;
  dispatch({ type: CHANGE_HVDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hvdamage/odor`,
      { id, odor: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HVDAMAGE_SUCCESS, hvdamage: data.hvdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_HVDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeBCompDamaged = (bcompdamaged) => async (dispatch) => {
  const { id, state } = bcompdamaged;
  dispatch({ type: CHANGE_HVDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hvdamage/bcompdamaged`,
      { id, bcompdamaged: state },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: CHANGE_HVDAMAGE_SUCCESS, hvdamage: data.hvdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_HVDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeBatterySeparated = (batteryseparated) => async (dispatch) => {
  const { id, state } = batteryseparated;
  dispatch({ type: CHANGE_HVDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hvdamage/batteryseparated`,
      { id, batteryseparated: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HVDAMAGE_SUCCESS, hvdamage: data.hvdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_HVDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeElectricalDamage = (electricaldamage) => async (dispatch) => {
  const { id, state } = electricaldamage;
  dispatch({ type: CHANGE_HVDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hvdamage/electricaldamage`,
      { id, electricaldamage: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HVDAMAGE_SUCCESS, hvdamage: data.hvdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_HVDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

const changeCableDamage = (cabledamage) => async (dispatch) => {
  const { id, state } = cabledamage;
  dispatch({ type: CHANGE_HVDAMAGE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      `${api}/api/hvdamage/cabledamage`,
      { id, cabledamage: state },
      {
        headers: { "x-auth-token": token },
      }
    );
    dispatch({ type: CHANGE_HVDAMAGE_SUCCESS, hvdamage: data.hvdamage });
  } catch (error) {
    dispatch({
      type: CHANGE_HVDAMAGE_FAILED,
      error: error.response.data.message,
    });
  }
};

export {
  getHVdamage,
  changeBatteryDamaged,
  changeLeakingFluid,
  changeOdor,
  changeAnySmoke,
  changeBCompDamaged,
  changeBatterySeparated,
  changeElectricalDamage,
  changeCableDamage
};
