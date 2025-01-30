import React, { useState } from "react";

function InputAndPreview() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="input-and-preview mx-auto max-w-md space-y-4 rounded-xl bg-white p-4 shadow-md">
      <input
        type="file"
        onChange={handleFileChange}
        className="file-input block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="preview-image mt-4 rounded-lg shadow-lg"
        />
      )}
    </div>
  );
}

export default InputAndPreview;
