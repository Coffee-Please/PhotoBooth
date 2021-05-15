// imports
import React, { setState, useState } from 'react';
import { motion } from 'framer-motion';
import { CgTrash } from 'react-icons/cg';
import { useSession } from "./../firebase/userProvider";
import { photoBoothFirestore } from './../firebase/config';
import ManageItems from './manageItems';
import ConfirmDeleteModal from './confirmDeleteModal';
import Modal from 'react-modal';
import MoveImageModal from './moveImageModal';


// function that creates the modal
const ImageModal = ({ selectedImage, setSelectedImage }) => {
  const { user } = useSession(); // get the user info
  const userId = user.uid; // set the user id for passing to delete method if needed

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
      <motion.img src={ selectedImage } alt="" initial={{ y: "-100vh" }} animate={{ y: 0 }}/>

      {/* delete image button */}
      <ConfirmDeleteModal method={'delete'} type={'image'} albumName={null} field={'url'} userId={userId} selectedItem={selectedImage} setSelectedItem={setSelectedImage}/>

      {/* change album modal */}
      <MoveImageModal method={'update'} field={'url'} userId={userId} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>

    </motion.div>
  )
}

export default ImageModal;
