import { useState } from "react";

const options = [
  { label: "With Lab", value: "withLab" },
  { label: "Lab Preferred", value: "labPreferred" },
];

function Customcheckbox({ input }) {
  const [checked, setCheckBoxChecked] = useState([]);

  const onAddCategory = (isChecked, value) => {
    console.log(":👉", isChecked, value);
    const temp = [checked];
    if (isChecked) {
      temp.push(value);
      setCheckBoxChecked(temp);
      return;
    }
    setCheckBoxChecked(temp.filter((item) => item !== value));
  };

  return (
    <div className="App">
      <ul>
        {options.map((option) => (
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
              onBlur={() => input.onBlur()}
            />
          </label>
        ))}
      </ul>
    </div>
  );
}

export default Customcheckbox;
