// imports
import React, { useState } from 'react';
import UploadForm from './uploadForm';
import ImageGrid from './imageGrid';
import Modal from './modal';

// function to display the gallery page
const Title = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="title">
      <h1>Album Name</h1>

      <UploadForm />

      <ImageGrid setSelectedImage={setSelectedImage}/>

      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  )
}

// exports
export default Title;
