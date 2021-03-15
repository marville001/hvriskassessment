import {
    CHANGE_HVDAMAGE_FAILED,
    CHANGE_HVDAMAGE_REQUEST,
    CHANGE_HVDAMAGE_SUCCESS,
  } from "../constants/hvDamageConstants";
  
  const hvDamageReducer = (state = { hvdamage: {} }, action) => {
    switch (action.type) {
      case CHANGE_HVDAMAGE_REQUEST:
        return { ...state, loading: true };
      case CHANGE_HVDAMAGE_SUCCESS:
        return { ...state, loading: false, hvdamage: action.hvdamage, error: "" };
      case CHANGE_HVDAMAGE_FAILED:
        return { ...state, loading: false, hvdamage: {}, error: action.error };
      default:
        return state;
    }
  };
  
  export { hvDamageReducer };
  