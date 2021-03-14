import { combineReducers } from "redux";

import { userReducer } from "./userReducers";
import { adminReducer } from "./adminReducers";
import { sessionReducer } from "./sessionReducers";
import { hazardReducer } from "./hazardReducers";

export const rootReducer = combineReducers({
  adminReducer,
  userReducer,
  sessionReducer,
  hazardReducer,
});
