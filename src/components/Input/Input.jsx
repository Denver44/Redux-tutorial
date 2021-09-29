import React from "react";

const Input = (props) => {
  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return <div>{error}</div>;
    }
  };

  return (
    <>
      <label>{props.label}</label>
      <input
        value={props.input.value}
        onChange={props.input.onChange}
        autoComplete="off"
      />
      {renderError(props.meta)}
    </>
  );
};

export default Input;
