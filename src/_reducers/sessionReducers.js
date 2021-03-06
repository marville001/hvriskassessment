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

    case ALL_SESSION_REQUEST:
      return { ...state, loading_all: true };
    case ALL_SESSION_SUCCESS:
      return { ...state, loading_all: false, sessions: action.sessions, error_all: "" };
    case ALL_SESSION_FAILED:
      return { ...state, loading_all: false, error_all: action.error };

    default:
      return state;
  }
};

export { sessionReducer };
