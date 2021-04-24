// imports
import React, { useState } from 'react';
import UploadForm from './../components/uploadForm';
import ImageGrid from './../components/imageGrid';
import Modal from './../components/modal';
import AlbumList from './../components/albumList';
import CreateAlbumForm from './../components/createAlbumForm';



// function to display the gallery page
const Gallery = () => {
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
export default Gallery;
