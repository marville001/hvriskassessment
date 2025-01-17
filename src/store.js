import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { rootReducer } from "./_reducers";

const midleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
