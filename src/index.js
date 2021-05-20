import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/5Tut/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./components/5Tut/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

const store = createStore(reducers, composeWithDevTools());

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
