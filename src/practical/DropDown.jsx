import React, { useState } from "react";

function DropDown() {
  // Define state for the first and second dropdowns
  const [selectedOption, setSelectedOption] = useState("");
  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);

  // Define a function to handle the first dropdown's change event
  const handleFirstDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    let options = [];
    if (selectedValue === "Option 1") {
      options = ["Suboption 1.1", "Suboption 1.2", "Suboption 1.3"];
    } else if (selectedValue === "Option 2") {
      options = ["Suboption 2.1", "Suboption 2.2", "Suboption 2.3"];
    } else {
      options = [];
    }

    setSecondDropdownOptions(options);
  };

  return (
    <div>
      <h1>Dynamic Dropdowns</h1>
      <div>
        <label>First Dropdown:</label>
        <select value={selectedOption} onChange={handleFirstDropdownChange}>
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      </div>
      <div>
        <label>Second Dropdown:</label>
        <select>
          {secondDropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropDown;
