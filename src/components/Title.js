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
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState("All Images");
  const [albumList, setAlbumList] = useState([ "All Images" ]);

  console.log("selectedAlbum", selectedAlbum);
  console.log("albumList: ", albumList);

  return (
    <>
<div className="gallery">
  <div className="list">
    <AlbumList setSelectedAlbum={setSelectedAlbum} setAlbumList={setAlbumList} />
    <CreateAlbumForm setSelectedAlbum={setSelectedAlbum} selectedAlbum={selectedAlbum} />
  </div>

  <div className="title">
      <h1>Album Name</h1>

      <UploadForm />

      <ImageGrid setSelectedImage={setSelectedImage} selectedAlbum={selectedAlbum} />

      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
  </div>

</div>

    </>
  )
}

// exports
export default Title;
