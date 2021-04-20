// Imports
import React from 'react';
import useStorage from './../hooks/useStorage';

// function that returns a progress bar
const ProgressBar = ({ file, setFile }) => {
// Variables
const { url, progress } = useStorage(file); // url of file and progress of upload
  console.log(progress, url);
  return(
    // progress bar
    <div className="progress-bar">
    progress
    </div>
  )
}

// Exports
export default ProgressBar;
