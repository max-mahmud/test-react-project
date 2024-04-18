import React, { useState } from "react";

function CheckboxGroupWithCheckAll() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const options = ["option1", "option2", "option3"];

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleCheckAll = () => {
    setSelectedOptions(options);
    setSelectAll(true);
  };

  const handleUncheckAll = () => {
    setSelectedOptions([]);
    setSelectAll(false);
  };

  return (
    <div>
      <p>Select your options:</p>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange}
          />
          {option}
        </label>
      ))}
      <button onClick={handleCheckAll}>Check All</button>
      <button onClick={handleUncheckAll}>Uncheck All</button>
      <p>Selected options: {selectedOptions.join(", ")}</p>
    </div>
  );
}

export default CheckboxGroupWithCheckAll;
