import {
  GET_VEHICLE_REQUEST,
  GET_VEHICLE_SUCCESS,
  GET_VEHICLE_FAILED,
  ADD_VEHICLE_REQUEST,
  ADD_VEHICLE_SUCCESS,
  ADD_VEHICLE_FAILED,
  UPDATE_VEHICLE_REQUEST,
  UPDATE_VEHICLE_SUCCESS,
  UPDATE_VEHICLE_FAILED,
} from "../constants/vehicleConstants";

const vehicleReducer = (state = { vehicle: {} }, action) => {
  switch (action.type) {
    case GET_VEHICLE_REQUEST:
      return { ...state, loading: true };
    case GET_VEHICLE_SUCCESS:
      return { ...state, loading: false, vehicle: action.vehicle, error: "" };
    case GET_VEHICLE_FAILED:
      return { ...state, loading: false, vehicle: {}, error: action.error };

    case ADD_VEHICLE_REQUEST:
      return { ...state, loading: true };
    case ADD_VEHICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicle: action.vehicle,
        adderror: "",
      };
    case ADD_VEHICLE_FAILED:
      return { ...state, loading: false, vehicle: {}, adderror: action.error };

    case UPDATE_VEHICLE_REQUEST:
      return { ...state, updateloading: true };
    case UPDATE_VEHICLE_SUCCESS:
      return {
        ...state,
        updateloading: false,
        vehicle: action.vehicle,
        updateerror: "",
      };
    case UPDATE_VEHICLE_FAILED:
      return {
        ...state,
        updateloading: false,
        vehicle: {},
        updateerror: action.error,
      };
    default:
      return state;
  }
};

export { vehicleReducer };
