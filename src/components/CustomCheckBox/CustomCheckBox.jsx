import { useState } from "react";

const options = [
  { label: "Male", value: "male" },
  { label: "Female", value: "feMale" },
];

const CustomCheckBox = ({ input }) => {
  const [checked, setCheckBoxChecked] = useState([]);
  const onAddCategory = (isChecked, value) => {
    const temp = [checked];
    if (isChecked) {
      temp.push(value);
      setCheckBoxChecked(temp);
      return;
    }
    setCheckBoxChecked(temp.filter((item) => item !== value));
  };

  return (
    <>
      {options.map((option) => (
        <div>
          <label>
            {option.label}
            <input
              {...input}
              checked={checked.includes(option.value)}
              onChange={(e) => {
                onAddCategory(e.target.checked, option.value);
                input.onChange(option.value);
              }}
              type="checkbox"
              onBlur={() => input.onBlur()} // Search more about this
            />
          </label>
        </div>
      ))}
    </>
  );
};

export default CustomCheckBox;
