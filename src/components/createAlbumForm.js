import React, { useRef, useState } from 'react';
import { photoBoothStorage, photoBoothFirestore, timestamp } from '../firebase/config';
import { useSession } from "./../firebase/userProvider";
import UploadForm from './uploadForm';

const CreateAlbumForm = () => {
  // hooks
  const [albumName, setAlbumName] = useState(null); // hook to store errors
  const [error, setError] = useState(null); // hook to store errors


  // Functions
  const handleChange = ({ target }) => {
    setAlbumName(target.value);
    console.log("seyAlb: ", albumName);
  };

  // TODO: check if album exists
  const createAlbum = () => {

  }

  return (
    <>
      {/* get input for file upload */}
      <input type="text" placeholder="Enter a album name..." onChange={handleChange}/>
      { albumName && <UploadForm selectedAlbum={albumName} setSelectedAlbum={setAlbumName} /> }
    </>
  )
}

export default CreateAlbumForm;
