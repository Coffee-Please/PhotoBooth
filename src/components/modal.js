// imports
import React, { setState, useState } from 'react';
import { motion } from 'framer-motion';
import { CgTrash } from 'react-icons/cg';
import { useSession } from "./../firebase/userProvider";
import { photoBoothFirestore } from './../firebase/config';
import MoveImageModal from './moveImageModal';
import ConfirmDeleteModal from './confirmDeleteModal';



// function that creates the modal
const ImageModal = ({ selectedAlbum, setSelectedAlbum, selectedImage, setSelectedImage }) => {
  const { user } = useSession(); // get the user info
  const userId = user.uid; // set the user id for passing to delete method if needed
  const field = 'url'; // set the field for the delete to url

  // function to close the modal
  const handleClick = (e) => {
    // check if the backdrop is clicked
    if(e.target.classList.contains('backdrop')) {
      setSelectedImage(null); // set the selected image to empty
    }
  }


  return (
    // modal
    <motion.div className="backdrop" onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      // modal image
      <motion.img src={ selectedImage } alt="" initial={{ y: "-100vh" }} animate={{ y: 0 }} />

      {/* delete image button */}
      <ConfirmDeleteModal method={'delete'} albumName={null} field={'url'} userId={userId} selectedItem={selectedImage} setSelectedItem={setSelectedImage} selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />

      {/* change album modal */}
      <MoveImageModal method={'update'} field={field} userId={userId} selectedImage={selectedImage} setSelectedImage={setSelectedImage} selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />

    </motion.div>
  )
}

export default ImageModal;
