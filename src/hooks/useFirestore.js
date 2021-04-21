// imports
import { useState, useEffect } from 'react';
import { photoBoothFirestore } from './../firebase/config';

// function to retrieve the images from firestore
const useFirestore = (collection) => {
  // hooks
  const [docs, setDocs] = useState([]); // to store images

  // listen for documents within the collection
  useEffect(() => {
    const unsub = photoBoothFirestore.collection(collection) // access images collection from firestore
    // retrieval order is in descending order by createdAt value
    .orderBy('createdAt', 'desc')
    // callback function captures snapshot of the database, whenever there is a change in the collection
    .onSnapshot((snap) => {
        let documents = []; // create array to hold the documents

        // for each document in the firestore collection
        snap.forEach( doc => {
          documents.push({...doc.data(), id: doc.id}) // get the data and id
        });

        // update the documents
        setDocs(documents);
    });

    // clean up: unsubscribe from the collection once we are done
    return () => unsub();
  }, [collection])

  return { docs };
}

export default useFirestore;
