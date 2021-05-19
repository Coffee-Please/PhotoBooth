// imports

import React, { useState } from "react";
import UploadForm from "./../components/uploadForm";
import ImageGrid from "./../components/imageGrid";
import ImageModal from "./../components/modal";
import AlbumList from "./../components/albumList";
import CreateAlbumForm from "./../components/createAlbumForm";

// function to display the gallery page
const Gallery = () => {
  // hooks
  const [selectedImage, setSelectedImage] = useState(null); // get the selected image
  const [selectedAlbum, setSelectedAlbum] = useState("All Images"); // get the selected album and initialize with default folder

  return (
    <>
      <div className="gallery">
        <div className="list album-list">
          <AlbumList
            selectedAlbum={selectedAlbum}
            setSelectedAlbum={setSelectedAlbum}
          />
          <CreateAlbumForm setSelectedAlbum={setSelectedAlbum} />
        </div>

        <div className="title">
          {selectedAlbum && <h1>{selectedAlbum}</h1>}

          <UploadForm
            selectedAlbum={selectedAlbum}
            setSelectedAlbum={setSelectedAlbum}
          />

          <ImageGrid
            setSelectedImage={setSelectedImage}
            selectedAlbum={selectedAlbum}
          />

          {selectedImage && (
            <ImageModal
              selectedAlbum={selectedAlbum}
              setSelectedAlbum={setSelectedAlbum}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
        </div>
      </div>
    </>
  );
};

// exports
export default Gallery;
