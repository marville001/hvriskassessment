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
    ALL_SESSIONS_FAILED,
    ALL_SESSIONS_SUCCESS,
    ALL_SESSIONS_REQUEST,
    ALL_CALLERS_FAILED,
    ALL_CALLERS_SUCCESS,
    ALL_CALLERS_REQUEST,
    ADD_ADMIN_REQUEST,
    ADD_ADMIN_SUCCESS,
    ADD_ADMIN_FAILED,
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAILED,
  } from "../constants/adminConstants";
  
  const adminReducer = (
    state = { employees: [], sessions: [], callers: [], admins: [], admin: {} },
    action
  ) => {
    switch (action.type) {
      case ADMIN_SIGNIN_REQUEST:
        return { ...state, loading: true };
      case ADMIN_SIGNIN_SUCCESS:
        return { ...state, loading: false, admin: action.admin, error: "" };
      case ADMIN_SIGNIN_FAILED:
        return { ...state, loading: false, error: action.error };
  
      case ADD_ADMIN_REQUEST:
        return { ...state, addloading: true };
      case ADD_ADMIN_SUCCESS:
        return {
          ...state,
          addloading: false,
          admins: [...state.admins, action.admin],
          error: "",
        };
      case ADD_ADMIN_FAILED:
        return { ...state, addloading: false, adderror: action.error };
  
      case ADD_EMPLOYEE_REQUEST:
        return { ...state, addloading: true };
      case ADD_EMPLOYEE_SUCCESS:
        return {
          ...state,
          addloading: false,
          employees: [...state.employees, action.employee],
          adderror: "",
        };
      case ADD_EMPLOYEE_FAILED:
        return { ...state, addloading: false, adderror: action.error };
  
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
  
      case ALL_SESSIONS_REQUEST:
        return { ...state, loading: true };
      case ALL_SESSIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          sessions: action.sessions,
          error: "",
        };
      case ALL_SESSIONS_FAILED:
        return { ...state, loading: false, error: action.error };
  
      case ALL_CALLERS_REQUEST:
        return { ...state, loading: true };
      case ALL_CALLERS_SUCCESS:
        return {
          ...state,
          loading: false,
          callers: action.callers,
          error: "",
        };
      case ALL_CALLERS_FAILED:
        return { ...state, loading: false, error: action.error };
  
      case ADMIN_LOGOUT:
        return { ...state, admin: {} };
      default:
        return state;
    }
  };
  
  export { adminReducer };
  