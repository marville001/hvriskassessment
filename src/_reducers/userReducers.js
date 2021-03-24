import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_FAILED,
  LOGOUT_USER,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILED,
} from "../_actions/types";

const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNIN_SUCCESS:
      return { ...state, loading: false, user: action.user, error: "" };
    case USER_SIGNIN_FAILED:
      return { ...state, loading: false, user: {}, error: action.error };

    case UPDATE_EMPLOYEE_REQUEST:
      return { ...state, updateloading: true };
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        updateloading: false,
        user: action.user,
        updateerror: "",
      };
    case UPDATE_EMPLOYEE_FAILED:
      return {
        ...state,
        updateloading: false,
        user: {},
        updateerror: action.error,
      };
    case LOGOUT_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};

export { userReducer };
