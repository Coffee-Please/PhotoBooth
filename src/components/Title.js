// imports
import React, { useState } from 'react';
import UploadForm from './uploadForm';
import ImageGrid from './imageGrid';
import Modal from './modal';
import Albums from './albums';


// function to display the gallery page
const Title = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
<div className="gallery">
  <div className="list">
    <Albums />
  </div>

  <div className="title">
      <h1>Album Name</h1>

      <UploadForm />

      <ImageGrid setSelectedImage={setSelectedImage}/>

      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
  </div>

</div>

    </>
  )
}

// exports
export default Title;
