import {
  GET_RPARTY_FAILED,
  GET_RPARTY_REQUEST,
  GET_RPARTY_SUCCESS,
  RPARTY_ADD_FAILED,
  RPARTY_ADD_REQUEST,
  RPARTY_ADD_SUCCESS,
  UPDATE_RPARTY_FAILED,
  UPDATE_RPARTY_REQUEST,
  UPDATE_RPARTY_SUCCESS,
} from "../constants/rPartyConstants";

const rpartyReducer = (state = { rparty: {} }, action) => {
  switch (action.type) {
    case GET_RPARTY_REQUEST:
      return { ...state, loading: true };
    case GET_RPARTY_SUCCESS:
      return { ...state, loading: false, rparty: action.rparty, error: "" };
    case GET_RPARTY_FAILED:
      return { ...state, loading: false, rparty: {}, error: action.error };

    case RPARTY_ADD_REQUEST:
      return { ...state, loading: true };
    case RPARTY_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        rparty: action.rparty,
        adderror: "",
      };
    case RPARTY_ADD_FAILED:
      return { ...state, loading: false, adderror: action.error };

    case UPDATE_RPARTY_REQUEST:
      return { ...state, updateloading: true };
    case UPDATE_RPARTY_SUCCESS:
      return {
        ...state,
        updateloading: false,
        rparty: action.rparty,
        updateerror: "",
      };
    case UPDATE_RPARTY_FAILED:
      return {
        ...state,
        updateloading: false,
        rparty: {},
        updateerror: action.error,
      };
    default:
      return state;
  }
};

export { rpartyReducer };
