import axios from "axios";
import {
  ADD_VEHICLE_REQUEST,
  ADD_VEHICLE_SUCCESS,
  ADD_VEHICLE_FAILED,
  GET_VEHICLE_FAILED,
  GET_VEHICLE_REQUEST,
  GET_VEHICLE_SUCCESS,
  UPDATE_VEHICLE_FAILED,
  UPDATE_VEHICLE_REQUEST,
  UPDATE_VEHICLE_SUCCESS,
} from "../constants/vehicleConstants";

import api from "./values";

const addVehicle = (vehicle) => async (dispatch) => {
  dispatch({ type: ADD_VEHICLE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.post(`${api}/api/vehicle/`, vehicle, {
      headers: { "x-auth-token": token },
    });

    dispatch({ type: ADD_VEHICLE_SUCCESS, vehicle: data.vehicle });
  } catch (error) {
    dispatch({
      type: ADD_VEHICLE_FAILED,
      error: error.response.data.message,
    });
  }
};

const getVehicle = (sessionId) => async (dispatch) => {
  dispatch({ type: GET_VEHICLE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      `${api}/api/vehicle/${sessionId}`,
      { name: "VEHICLE" },
      {
        headers: { "x-auth-token": token },
      }
    );

    dispatch({ type: GET_VEHICLE_SUCCESS, vehicle: data.vehicle });
  } catch (error) {
    dispatch({
      type: GET_VEHICLE_FAILED,
      error: error.response.data.message,
    });
  }
};

const updateVehicle = (vehicle, id) => async (dispatch) => {
  dispatch({ type: UPDATE_VEHICLE_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(`${api}/api/vehicle/${id}`, vehicle, {
      headers: { "x-auth-token": token },
    });

    dispatch({ type: UPDATE_VEHICLE_SUCCESS, vehicle: data.vehicle });
  } catch (error) {
    dispatch({
      type: UPDATE_VEHICLE_FAILED,
      error: error.response.data.message,
    });
  }
};

export { addVehicle, getVehicle, updateVehicle };
