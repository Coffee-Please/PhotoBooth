import React, { useState } from 'react';
import UploadForm from './uploadForm';

const CreateAlbumForm = ({ setSelectedAlbum }) => {
  // hooks
  const [albumName, setAlbumName] = useState(null); // hook to store errors


  // Functions
  // function to update the album name as the input is typed
  const handleChange = ({ target }) => {
    setAlbumName(target.value);
  };

  return (
    <>
      {/* get input for album name */}
      <input type="text" id="album-name" placeholder="Start typing to add a album..." onChange={handleChange}/>

      {/* if there is an album name, then show the upload form */}
      { albumName && <UploadForm selectedAlbum={albumName} setSelectedAlbum={setSelectedAlbum} setAlbumName={setAlbumName} /> }
    </>
  )
}

export default CreateAlbumForm;
