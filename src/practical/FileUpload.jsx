import React, { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input type="file" accept=".jpg, .jpeg, .png, .gif" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <img src={URL.createObjectURL(selectedFile)} alt="Preview" width="100" />
        </div>
      )}
    </div>
  );
}

export default FileUpload;
