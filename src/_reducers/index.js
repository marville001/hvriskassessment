import { combineReducers } from "redux";

import { userReducer } from "./userReducers";
import { adminReducer } from "./adminReducers";
import { sessionReducer } from "./sessionReducers";
import { hazardReducer } from "./hazardReducers";
import { vDamageReducer } from "./vDamageReducers";

export const rootReducer = combineReducers({
  adminReducer,
  userReducer,
  sessionReducer,
  hazardReducer,
  vDamageReducer,
});
