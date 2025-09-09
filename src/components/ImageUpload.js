import React, { useState } from "react";
import "./ImageUpload.css";

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Affected Area Image</h2>

      <label htmlFor="fileInput" className="upload-box">
        <span className="upload-text">Click to upload or drag & drop</span>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
        />
      </label>

      {image && (
        <div className="preview-section">
          <p className="preview-label">Preview:</p>
          <img src={image} alt="Preview" className="preview" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
