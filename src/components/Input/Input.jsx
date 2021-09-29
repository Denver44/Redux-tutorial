import React from "react";

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        value={props.input.value}
        onChange={props.input.onChange}
        autoComplete="off"
      />
    </>
  );
};

export default Input;
