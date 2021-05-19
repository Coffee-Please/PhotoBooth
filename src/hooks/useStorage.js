// Imports
import { useState, useEffect } from 'react';
import { photoBoothStorage, photoBoothFirestore, timestamp } from './../firebase/config';
import { useSession } from "./../firebase/userProvider";


// store and retrieve image files from storage
const useStorage = (file, selectedAlbum) => {
  // Hooks
  const [progress, setProgress] = useState(0); // progress of the upload
  const [error, setError] = useState(null); // errors of the upload
  const [url, setUrl] = useState(null); // image url from storage after the upload
  const { user } = useSession(); // get the user info


  useEffect(() => {
    // references
    const storageRef = photoBoothStorage.ref(file.name); // create reference to file
    const collectionRef = photoBoothFirestore.collection(`${user.uid}`); // create reference to user's collection in firestore

    // upload file to the reference when state of reference changes
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; // percentage of the upload (progress)
      setProgress(percentage); // set the progress as the percentage
    },
    // if error
    (err) => {
      setError(err); // set error
    },
    // if upload success
    async () => {
      const url = await storageRef.getDownloadURL(); // get the download URL
      const createdAt = timestamp(); // get the timestamp of when the image is uploaded
      const uploadedBy = user.displayName; // get the name of the user who is uploading the
      var album = "";

      // check if there is an album
      if (selectedAlbum == undefined) {
        album = null; // if not, set to null to be added to "All Images"
      }
      else {
        album = selectedAlbum; // otherwise set the album name
      }

      // if there is and image, add
      collectionRef.add({ url, album, createdAt, uploadedBy }); // create or add image info to the firestore collection
      setUrl(url); // set the url downloaded
    })
  }, [file, selectedAlbum]); // set file and album as a required dependency

// return values
  return { progress, url, error }
}


export default useStorage;
