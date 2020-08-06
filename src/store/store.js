import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";

const reduces = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  reduces,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
