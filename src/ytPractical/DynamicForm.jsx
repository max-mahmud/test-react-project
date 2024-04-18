import React, { useState } from 'react';

function DynamicForm() {
  const [fields, setFields] = useState([{ name: '', value: '' }]);

  const handleChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  const handleAddField = () => {
    setFields([...fields, { name: '', value: '' }]);
  };

  const handleRemoveField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={field.name}
              placeholder="Name"
              onChange={(event) => handleChange(index, event)}
            />
            <input
              type="text"
              name="value"
              value={field.value}
              placeholder="Value"
              onChange={(event) => handleChange(index, event)}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DynamicForm;
