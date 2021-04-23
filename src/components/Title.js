// imports
import React, { useState } from 'react';
import UploadForm from './uploadForm';
import ImageGrid from './imageGrid';
import Modal from './modal';
import AlbumList from './albumList';
import CreateAlbum from './createAlbum';



// function to display the gallery page
const Title = () => {
  // hooks
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);


  return (
    <>
<div className="gallery">
  <div className="list">
    <AlbumList selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />
    <CreateAlbum />
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
