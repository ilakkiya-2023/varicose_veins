import React, { useState } from 'react';

function ImageUpload() {
  const [image, setImage] = useState(null);

  return (
    <div className="container">
      <h2>Upload Affected Area Image</h2>
      <input type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
      {image && <img src={image} alt="Preview" className="preview" />}
    </div>
  );
}

export default ImageUpload;
