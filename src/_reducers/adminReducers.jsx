import {
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_FAILED,
  ADMIN_LOGOUT,
} from "../_actions/types";

import {
  ALL_ADMIN_FAILED,
  ALL_ADMIN_SUCCESS,
  ALL_ADMIN_REQUEST,
  ALL_EMPLOYEES_FAILED,
  ALL_EMPLOYEES_SUCCESS,
  ALL_EMPLOYEES_REQUEST,
} from "../constants/adminConstants";

const adminReducer = (
  state = { employees: [], admins: [], admin: {} },
  action
) => {
  switch (action.type) {
    case ADMIN_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case ADMIN_SIGNIN_SUCCESS:
      return { ...state, loading: false, admin: action.admin, error: "" };
    case ADMIN_SIGNIN_FAILED:
      return { ...state, loading: false, error: action.error };

    case ALL_ADMIN_REQUEST:
      return { ...state, loading: true };
    case ALL_ADMIN_SUCCESS:
      return { ...state, loading: false, admins: action.admins, error: "" };
    case ALL_ADMIN_FAILED:
      return { ...state, loading: false, error: action.error };

    case ALL_EMPLOYEES_REQUEST:
      return { ...state, loading: true };
    case ALL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.employees,
        error: "",
      };
    case ALL_EMPLOYEES_FAILED:
      return { ...state, loading: false, error: action.error };

    case ADMIN_LOGOUT:
      return { ...state, admin: {} };
    default:
      return state;
  }
};

export { adminReducer };
