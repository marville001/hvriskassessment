import {
  GET_CALLER_REQUEST,
  GET_CALLER_SUCCESS,
  GET_CALLER_FAILED,
  ADD_CALLER_REQUEST,
  ADD_CALLER_SUCCESS,
  ADD_CALLER_FAILED,
  UPDATE_CALLER_REQUEST,
  UPDATE_CALLER_SUCCESS,
  UPDATE_CALLER_FAILED,
} from "../constants/callerConstants";

const callerReducer = (state = { caller: {} }, action) => {
  switch (action.type) {
    case GET_CALLER_REQUEST:
      return { ...state, loading: true };
    case GET_CALLER_SUCCESS:
      return { ...state, loading: false, caller: action.caller, error: "" };
    case GET_CALLER_FAILED:
      return { ...state, loading: false, caller: {}, error: action.error };

    case ADD_CALLER_REQUEST:
      return { ...state, loading: true };
    case ADD_CALLER_SUCCESS:
      return { ...state, loading: false, caller: action.caller, error: "" };
    case ADD_CALLER_FAILED:
      return { ...state, loading: false, caller: {}, error: action.error };

    case UPDATE_CALLER_REQUEST:
      return { ...state, updateloading: true };
    case UPDATE_CALLER_SUCCESS:
      return {
        ...state,
        updateloading: false,
        caller: action.caller,
        updateerror: "",
      };
    case UPDATE_CALLER_FAILED:
      return {
        ...state,
        updateloading: false,
        caller: {},
        updateerror: action.error,
      };
    default:
      return state;
  }
};

export { callerReducer };
