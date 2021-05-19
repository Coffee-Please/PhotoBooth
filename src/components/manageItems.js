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
          doc.ref.update({ album: albumName }); // update the document album tag
        }

      });
    }).catch((error) => {
        console.log("Error getting documents: ", error); // catch and log any errors
    });

//-----------------------------------------------------
//
// update the display
//
//-----------------------------------------------------


    checkAlbum.get().then( (querySnapshot) => {
        // If the handling was of an image
        if (field == "url") {
        // if the deleted image was the last image in the album
          if (querySnapshot.docs.length == 1) {
              // Album is empty, redirect to All Images
              setSelectedAlbum("All Images");
          }

          // if we were updating the image to another albun
          if (method == 'update') {
            if(albumName){
              setSelectedAlbum(albumName); // set album to the album the image was moved to
            } else {
              setSelectedAlbum("All Images"); // otherwise set to All images if the album was not inputted
            }
          }

          setSelectedItem(null); // set the selected image to empty to close the modal
        }

        // otherwise were are handling an album
       else {
         // If the deletion was of an album
         if(method == 'delete'){
           setSelectedItem('All Images'); // set the selected album to all images
         }
         // otherwise if the method is update (rename the album)
         if (method == 'update') {
           setSelectedItem(albumName); // set the album to the newly named album
         }
        }
      }).catch( (error) => {
        console.log("Error getting documents: ", error); // catch and log any errors
      });
}

export default ManageItems;
