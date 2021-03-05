import { combineReducers } from "redux";

import { userReducer } from "./userReducers";
import { adminReducer } from "./adminReducers";
import { sessionReducer } from "./sessionReducers";

export const rootReducer = combineReducers({
  userReducer,
  adminReducer,
  sessionReducer,
});
