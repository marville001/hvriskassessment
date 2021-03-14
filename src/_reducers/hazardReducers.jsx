import {
  CHANGE_HAZARD_FAILED,
  CHANGE_HAZARD_REQUEST,
  CHANGE_HAZARD_SUCCESS,
} from "../constants/hazardConstants";

const hazardReducer = (state = { hazard: {} }, action) => {
  switch (action.type) {
    case CHANGE_HAZARD_REQUEST:
      return { ...state, loading: true };
    case CHANGE_HAZARD_SUCCESS:
      return { ...state, loading: false, hazard: action.hazard, error: "" };
    case CHANGE_HAZARD_FAILED:
      return { ...state, loading: false, hazard: {}, error: action.error };
    default:
      return state;
  }
};

export { hazardReducer };
