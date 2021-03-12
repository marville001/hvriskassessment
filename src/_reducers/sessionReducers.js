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
  VEHICLE_ADD_REQUEST,
  VEHICLE_ADD_SUCCESS,
  VEHICLE_ADD_FAILED,
} from "../_actions/types";

const sessionReducer = (state = { session: {}, sessions: [] }, action) => {
  switch (action.type) {
    case CREATE_SESSION_REQUEST:
      return { ...state, loading: true };
    case CREATE_SESSION_SUCCESS:
      return { ...state, loading: false, session: action.session, error: "" };
    case CREATE_SESSION_FAILED:
      return { ...state, loading: false, error: action.error };

    case CURRENT_SESSION_REQUEST:
      return { ...state, loading: true };
    case CURRENT_SESSION_SUCCESS:
      return { ...state, loading: false, session: action.session, error: "" };
    case CURRENT_SESSION_FAILED:
      return { ...state, loading: false, error: action.error };

    case UPDATE_SESSION_REQUEST:
      return { ...state, loading: true };
    case UPDATE_SESSION_SUCCESS:
      return { ...state, loading: false, session: action.session, error: "" };
    case UPDATE_SESSION_FAILED:
      return { ...state, loading: false, error: action.error };

    case CALLER_ADD_REQUEST:
      return { ...state, loading: true };
    case CALLER_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        caller: action.caller,
        callererror: "",
      };
    case CALLER_ADD_FAILED:
      return { ...state, loading: false, callererror: action.error };

    case RPARTY_ADD_REQUEST:
      return { ...state, loading: true };
    case RPARTY_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        rparty: action.rparty,
        rpartyerror: "",
      };
    case RPARTY_ADD_FAILED:
      return { ...state, loading: false, rpartyerror: action.error };

    case VEHICLE_ADD_REQUEST:
      return { ...state, loading: true };
    case VEHICLE_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicle: action.vehicle,
        vehicleerror: "",
      };
    case VEHICLE_ADD_FAILED:
      return { ...state, loading: false, vehicleerror: action.error };

    case ALL_SESSION_REQUEST:
      return { ...state, loading_all: true };
    case ALL_SESSION_SUCCESS:
      return {
        ...state,
        loading_all: false,
        sessions: action.sessions,
        error_all: "",
      };
    case ALL_SESSION_FAILED:
      return { ...state, loading_all: false, error_all: action.error };

    default:
      return state;
  }
};

export { sessionReducer };
