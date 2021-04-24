// imports
import React, { useState } from 'react';
import UploadForm from './uploadForm';
import ImageGrid from './imageGrid';
import Modal from './modal';
import AlbumList from './albumList';
import CreateAlbumForm from './createAlbumForm';



// function to display the gallery page
const Title = () => {
  // hooks
  const [selectedImage, setSelectedImage] = useState(null); // get the selected image
  const [selectedAlbum, setSelectedAlbum] = useState("All Images"); // get the selected album and initialize with default folder

  return (
    <>
      <div className="gallery">
        <div className="list">
          <AlbumList setSelectedAlbum={setSelectedAlbum} />
          <CreateAlbumForm setSelectedAlbum={setSelectedAlbum} />
        </div>

        <div className="title">
            {selectedAlbum && <h1>{selectedAlbum}</h1>}

            <UploadForm selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />

            <ImageGrid setSelectedImage={setSelectedImage} selectedAlbum={selectedAlbum} />

            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
        </div>

      </div>
    </>
  )
}

// exports
export default Title;
