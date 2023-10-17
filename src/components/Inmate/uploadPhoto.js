import React, { useState } from 'react';
import axios from 'axios';

const CustomImageUpload = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = async () => {
    try {
      if (selectedImage) {
        const formData = new FormData();
        formData.append('image', selectedImage, selectedImage.name);

        const response = await axios.post(`/upload`, formData);
        console.log('Server response:');
        console.log(response.data);

        // Handle success scenario
        alert('Uploaded successfully');
      } else {
        alert('Please select an image');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const preview = URL.createObjectURL(file);

    setSelectedImage(file);
    setImagePreview(preview);
  };

  return (
    <>
   <input type="file" name="image" accept=".jpg, .gif, .png" onChange={handleImageChange} />

      {imagePreview && (
        <img src={imagePreview} alt="" style={{ width: '200px', height: 'auto' }} />
      )}
      <button onClick={handleImageUpload}>Upload</button>
    </>
  );
};

export default CustomImageUpload;
