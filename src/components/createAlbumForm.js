import React, { useState } from 'react';
import UploadForm from './uploadForm';

const CreateAlbumForm = () => {
  // hooks
  const [albumName, setAlbumName] = useState(null); // hook to store errors
  const [error, setError] = useState(null); // hook to store errors


  // Functions
  const handleChange = ({ target }) => {
    setAlbumName(target.value);

    // TODO: check if album already exists

  };

  return (
    <>
      {/* get input for file upload */}
      <input type="text" placeholder="Enter a album name..." onChange={handleChange}/>
      { albumName && <UploadForm selectedAlbum={albumName} setSelectedAlbum={setAlbumName} /> }
    </>
  )
}

export default CreateAlbumForm;
