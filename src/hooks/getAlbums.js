// imports
import { useState, useEffect } from 'react';
import { photoBoothFirestore } from './../firebase/config';
import { useSession } from "./../firebase/userProvider";

// function to retrieve the images from firestore
const GetAlbums = (collection) => {
  // hooks
  const [albums, setAlbums] = useState([]); // to store images
  const { user } = useSession(); // get the user info

  // listen for documents within the collection
  useEffect(() => {
    const unsub = photoBoothFirestore.collection(collection) // access documents in collection from firestore
    // callback function captures snapshot of the database, whenever there is a change in the collection
    .onSnapshot((snap) => {
        let documents = []; // create array to hold the documents

        // for each document in the firestore collection
        snap.forEach( doc => {
          documents.push({...doc.data()}) // get the data and id
        });

        // update the documents
        setAlbums(documents);
    });

    // clean up: unsubscribe from the collection once we are done
    return () => unsub();
  }, [collection])


  return { albums };
}

export default GetAlbums;
