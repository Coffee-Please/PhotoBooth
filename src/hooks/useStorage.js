// Imports
import { useState, useEffect } from 'react';
import { photoBoothStorage } from './../firebase/config';

// store and retrieve image files from storage
const useStorage = (file) => {
  // Hooks
  const [progress, setProgress] = useState(0); // progress of the upload
  const [error, setError] = useState(null); // errors of the upload
  const [url, setUrl] = useState(null); // image url from storage after the upload

  useEffect(() => {
    // references
    const storageRef = photoBoothStorage.ref(file.name); // create reference to file

    // upload file to the reference when state of reference changes
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; // percentage of the upload (progress)
      setProgress(percentage); // set the progress as the percentage
    }, (err) => {
      setError(err); // if error, set error
    }, async () => {
      const url = await storageRef.getDownloadURL(); // if upload success, get the download URL
      setUrl(url); // set the url downloaded
    })
  }, [file]); // set file as a required dependency

// return values
  return { progress, url, error }
}

export default useStorage;
