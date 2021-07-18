import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import counterReducer from "../src/store/reducers/counter";
import resultReducer from "../src/store/reducers/result";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware]");
      next(action);
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
