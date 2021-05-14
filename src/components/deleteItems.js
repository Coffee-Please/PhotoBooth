// imports
import React from 'react';
import { photoBoothFirestore } from './../firebase/config';

// function to delete an image
const DeleteItem = ( field, user, selectedItem, setSelectedItem ) => {
    // references
    const collectionRef = photoBoothFirestore.collection(`${user}`); // create reference to user's collection in firestore
    const documents = collectionRef.where(field,'==', selectedItem); // set the query field to the field of the selected file

    // get the documents with the set query
    documents.get().then( (querySnapshot) => {
      // for each document found
      querySnapshot.forEach( (doc) => {
        doc.ref.delete(); // delete the document
      });
    }).then(() => {
      // If the deletion was of an image
      if(field == 'url'){
        setSelectedItem(null); // set the selected image to empty to close the modal
      } else {
        setSelectedItem('All Images'); // otherwise set album to All Images
      }
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

export default DeleteItem;
