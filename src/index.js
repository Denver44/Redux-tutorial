import { createStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { ourDepartment } from "./Store";
import { Provider } from "react-redux";

const store = createStore(
  ourDepartment,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
