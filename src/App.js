import React from "react";
import logo from "./logo.svg";
import { Counter } from "./components/2Tut/counter/Counter";
import User from "./components/2Tut/user/User";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User />
        <Counter />
      </header>
    </div>
  );
}

export default App;
