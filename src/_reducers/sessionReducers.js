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
  VEHICLE_ADD_REQUEST,
  VEHICLE_ADD_SUCCESS,
  VEHICLE_ADD_FAILED,
  VEHICLE_MAKE_REQUEST,
  VEHICLE_MAKE_SUCCESS,
  VEHICLE_MAKE_FAILED,
  CHANGE_SESSIONS_COUNT,
  CHANGE_SESSIONS_KEYWORD,
  CHANGE_SESSIONS_STATE,
  CHANGE_SESSIONS_SEARCHBY,
} from "../_actions/types";

const sessionReducer = (
  state = {
    session: {},
    sessions: [],
    sessionsCount: 10,
    keyword: "key",
    state: "all",
    searchby: "sessionstate",
    makes: [],
  },
  action
) => {
  switch (action.type) {
    case CHANGE_SESSIONS_COUNT:
      return { ...state, sessionsCount: action.count };
    case CHANGE_SESSIONS_KEYWORD:
      return { ...state, keyword: action.keyword };
    case CHANGE_SESSIONS_STATE:
      return { ...state, state: action.state };
    case CHANGE_SESSIONS_SEARCHBY:
      return { ...state, searchby: action.searchby };

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

    case VEHICLE_MAKE_REQUEST:
      return { ...state, loading: true };
    case VEHICLE_MAKE_SUCCESS:
      return {
        ...state,
        loading: false,
        makes: action.make,
      };
    case VEHICLE_MAKE_FAILED:
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
