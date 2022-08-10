import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import RegisterReducer from "./reducers/RegisterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  RegisterReducer,

});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
