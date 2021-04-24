// Imports
import React, { useEffect } from 'react';
import useStorage from './../hooks/useStorage';
import { motion } from 'framer-motion';


// function that returns a progress bar
const ProgressBar = ({ file, setFile, selectedAlbum, setSelectedAlbum, setAlbumName }) => {
// Variables
const { url, progress } = useStorage(file, selectedAlbum); // upload file to album and get url and progress of upload
  console.log(progress, url);
useEffect(() => {
  if(url) {
    // clear the file
    setFile(null);

    // show the user the album
    setSelectedAlbum(selectedAlbum);

    // clear album name and input if it was being created
    if (setAlbumName) {
      document.getElementById("album-name").value = '';
      setAlbumName(null);
    }
  }
}, [url, setFile])

  return(
    // progress bar
    <motion.div className="progress-bar" initial={{ width: 0 }} animate={{ width: progress + '%' }}></motion.div>
  )
}

// Exports
export default ProgressBar;
