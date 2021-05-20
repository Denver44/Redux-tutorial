import React from "react";

const Input = ({ input, label, meta }) => {
  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return <div>{error}</div>;
    }
  };

  return (
    <>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {renderError(meta)}
    </>
  );
};

export default Input;
