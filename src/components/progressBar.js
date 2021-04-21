// Imports
import React, { useEffect } from 'react';
import useStorage from './../hooks/useStorage';
import { motion } from 'framer-motion';


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
    <motion.div className="progress-bar" initial={{ width: 0 }} animate={{ width: progress + '%' }}></motion.div>
  )
}

// Exports
export default ProgressBar;
