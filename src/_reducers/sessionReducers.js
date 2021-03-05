import {
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILED,
} from "../_actions/types";

const sessionReducer = (state = { session: {} }, action) => {
  switch (action.type) {
    case CREATE_SESSION_REQUEST:
      return { ...state, loading: true };
    case CREATE_SESSION_SUCCESS:
      return { ...state, loading: false, session: action.session, error: "" };
    case CREATE_SESSION_FAILED:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export { sessionReducer };
