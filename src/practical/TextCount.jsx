import React, { useState } from "react";

function TextareaWithCounter() {
  const [text, setText] = useState("");
  const maxLength = 100; // Set your desired maximum text length here
  const remainingCharacters = maxLength - text.length;

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} placeholder="Type something..." />
      <div>
        {remainingCharacters}/{maxLength} characters remaining
      </div>
    </div>
  );
}

export default TextareaWithCounter;
