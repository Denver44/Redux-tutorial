import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/4Tut/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./components/4Tut/reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
