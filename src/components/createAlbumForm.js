import React, { useState } from 'react';
import UploadForm from './uploadForm';

const CreateAlbumForm = ({ setSelectedAlbum }) => {
  // hooks
  const [albumName, setAlbumName] = useState(null); // hook to store errors
  const [error, setError] = useState(null); // hook to store errors


  // Functions
  const handleChange = ({ target }) => {
    setAlbumName(target.value);
  };

  return (
    <>
      {/* get input for file upload */}
      <input type="text" id="album-name" placeholder="Start typing to add a album..." onChange={handleChange}/>
      { albumName && <UploadForm selectedAlbum={albumName} setSelectedAlbum={setSelectedAlbum} setAlbumName={setAlbumName} /> }
    </>
  )
}

export default CreateAlbumForm;
