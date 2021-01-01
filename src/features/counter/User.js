import React, { useState } from "react";
import { setName, selectName } from "./userSlice"; // importing selector selectName  ,setName  imported we dispatch and set name
import { useSelector, useDispatch } from "react-redux";
import "./user.css";

function User() {
  const [input, setInput] = useState(""); // Hooks we used for taking the name for input field.

  //   ------------------- USESELECTOR--------------------
  const name = useSelector(selectName); // The useselctor help us to take change the name form redux store.
  //   ------------------- USEDISPATCH--------------------
  const dispatch = useDispatch(); // this help us to shoot new value to the reducer to chnage it state.
  const handleclick = () => {
    console.log("hiii ", input);
    dispatch(setName(input));
  };
  return (
    <div className="user">
      <h2 className="heading__title">Redux Tutorial</h2>
      <div className="Button__input">
        <input
          className="input__field"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="Button" onClick={handleclick}>
          Update Your name in the Redux store
        </button>
      </div>
      <h1 className="heading__name">{name}</h1>
    </div>
  );
}

export default User;
