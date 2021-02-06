import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./components/2Tut/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    {/* We have to wrap our app on the store ever compnent can use the variable  from anywhere. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// MUST READ>
//1. Redux is a state container for JavaScript apps.
//2. where it takes control of state away from React components and gives it to a centralised place called a ‘store’.
// 3.React app with Redux. This time, when a component initiates a change, that information goes straight from it to our store  From there, the change is then communicated directly to all the components that need to update.
