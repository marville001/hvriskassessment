import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_FAILED,
  LOGOUT_USER
} from "../_actions/types";

const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNIN_SUCCESS:
      return { ...state, loading: false, user: action.user, error: "" };
    case USER_SIGNIN_FAILED:
      return { ...state, loading: false,user: {}, error: action.error };
    case LOGOUT_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};

export { userReducer };
