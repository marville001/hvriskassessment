import { combineReducers } from "redux";

import { userReducer } from "./userReducers";
import { adminReducer } from "./adminReducer";
import { sessionReducer } from "./sessionReducers";
import { hazardReducer } from "./hazardReducers";
import { vDamageReducer } from "./vDamageReducers";
import { hvDamageReducer } from "./hvDamageReducers";
import { callerReducer } from "./callerReducers";
import { rpartyReducer } from "./rPartyReducers";
import { vehicleReducer } from "./vehicleReducers";

export const rootReducer = combineReducers({
  adminReducer,
  userReducer,
  sessionReducer,
  hazardReducer,
  callerReducer,
  rpartyReducer,
  vDamageReducer,
  vehicleReducer,
  hvDamageReducer,
});
