// imports
import React from 'react';
import { photoBoothFirestore } from './../firebase/config';


// function to delete an image
const ManageItems = ( method, albumName, field, userId, selectedItem, setSelectedItem, selectedAlbum, setSelectedAlbum ) => {
    // references
    const collectionRef = photoBoothFirestore.collection(`${userId}`); // create reference to user's collection in firestore
    const documents = collectionRef.where(field,'==', selectedItem); // set the query field to the field of the selected file
    const checkAlbum = collectionRef.where('album','==', selectedAlbum); // set the query field to the field of the selected album

//-----------------------------------------------------
//
// get the items to update or delete
//
//-----------------------------------------------------

    // get the documents with the set query
    documents.get().then( (querySnapshot) => {
      // for each document found
      querySnapshot.forEach( (doc) => {

        // If the deletion was of an image
        if(method == 'delete'){
          doc.ref.delete(); // delete the document
        }
        // otherwise if the method is update
        if (method == 'update') {
          doc.ref.update({ album: albumName }); // update the document
        }

      });
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });

//-----------------------------------------------------
//
// update the display
//
//-----------------------------------------------------


    checkAlbum.get().then( (querySnapshot) => {
        // If the deletion was of an image
        if (field == "url") {
        // if the deleted image was the last image in the album
          if (querySnapshot.docs.length == 1) {
              // Album is empty, redirect to All Images
              setSelectedAlbum("All Images");
          }
          setSelectedItem(null); // set the selected image to empty to close the modal
        }

       else {
         // If the deletion was of an image
         if(method == 'delete'){
           setSelectedItem('All Images'); // set the selected image to empty to close the modal
         }
         // otherwise if the method is update
         if (method == 'update') {
           setSelectedItem(albumName); // otherwise set album to All Images
         }
        }
      }).catch( (error) => {
        console.log("Error getting documents: ", error);
      });
}

export default ManageItems;
