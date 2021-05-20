import React from "react";

function CheckBox({ input, label }) {
  console.log(input);

  return (
    <div>
      <input {...input} type="checkbox" />
      {label}
    </div>
  );
}

export default CheckBox;
