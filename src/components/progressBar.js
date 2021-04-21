// Imports
import React, { useEffect } from 'react';
import useStorage from './../hooks/useStorage';

// function that returns a progress bar
const ProgressBar = ({ file, setFile }) => {
// Variables
const { url, progress } = useStorage(file); // url of file and progress of upload
  console.log(progress, url);
useEffect(() => {
  if(url) {
    setFile(null);
  }
}, [url, setFile])

  return(
    // progress bar
    <div className="progress-bar" style={{ width: progress + '%' }}></div>
  )
}

// Exports
export default ProgressBar;
