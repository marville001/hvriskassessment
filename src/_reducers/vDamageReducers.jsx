import {
  CHANGE_VDAMAGE_FAILED,
  CHANGE_VDAMAGE_REQUEST,
  CHANGE_VDAMAGE_SUCCESS,
} from "../constants/vDamageConstants";

const vDamageReducer = (state = { vdamage: {} }, action) => {
  switch (action.type) {
    case CHANGE_VDAMAGE_REQUEST:
      return { ...state, loading: true };
    case CHANGE_VDAMAGE_SUCCESS:
      return { ...state, loading: false, vdamage: action.vdamage, error: "" };
    case CHANGE_VDAMAGE_FAILED:
      return { ...state, loading: false, vdamage: {}, error: action.error };
    default:
      return state;
  }
};

export { vDamageReducer };
