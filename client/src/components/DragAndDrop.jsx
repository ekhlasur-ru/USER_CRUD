import React, { useState } from "react";

function DragAndDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  return (
    <>
      <div>DragAndDrop</div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        style={{
          width: "600px",
          height: "200px",
          border: "2px dashed #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isDragging ? "#f0f0f0" : "#fff",
          transition: "background-color 0.3s",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          flexDirection: "column",
        }}>
        <input
          type="file"
          multiple
          onChange={(e) => {
            const files = Array.from(e.target.files);
            const imageFiles = files.filter((file) =>
              file.type.startsWith("image/")
            );
            const imageUrls = imageFiles.map((file) =>
              URL.createObjectURL(file)
            );
            setImages((prevImages) => [...prevImages, ...imageUrls]);
          }}
          style={{ display: "none" }} //Important Section
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          style={{ cursor: "pointer", color: "#007bff" }}>
          Select files
        </label>
        {isDragging ? "Release to drop files" : "Drag files here"}
      </div>
      <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`preview-${index}`}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              margin: "10px",
            }}
          />
        ))}
      </div>
    </>
  );
}

export default DragAndDrop;
