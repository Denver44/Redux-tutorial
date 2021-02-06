import React, { useState } from "react";
import { setName, selectName } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import "./user.css";

function User() {
  const [input, setInput] = useState("");

  const name = useSelector(selectName); // The useSelctor help us to take chnage the name form redux store.
  const dispatch = useDispatch(); // This help us to shoot new value to the reducer to Chnage it state.
  const handleclick = () => {
    dispatch(setName(input));
  };
  return (
    <div className="user">
      <h2 className="heading__title">Redux Tutorial</h2>
      <div className="Button__input">
        <input
          className="input__field"
          placeholder="Enter a text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="Button" onClick={handleclick}>
          Update Your name in the Redux store
        </button>
      </div>
      <h3 className="heading__name">{name}</h3>
    </div>
  );
}

export default User;
