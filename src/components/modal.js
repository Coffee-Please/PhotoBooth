// imports
import React, { setState, useState } from 'react';
import { motion } from 'framer-motion';
import { CgTrash } from 'react-icons/cg';
import { useSession } from "./../firebase/userProvider";
import { photoBoothFirestore } from './../firebase/config';
import DeleteItem from './deleteItems';
import Modal from 'react-modal';
import MoveImage from './moveImage';


// function that creates the modal
const ImageModal = ({ selectedImage, setSelectedImage }) => {
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
      <motion.img src={ selectedImage } alt="" initial={{ y: "-100vh" }} animate={{ y: 0 }}/>

      {/* delete image button */}
      <button className="ui red button" onClick={() => { DeleteItem('delete', null, field, userId, selectedImage, setSelectedImage) } }><CgTrash /> Delete</button>

      {/* change album modal */}
      <MoveImage method={'update'} field={field} userId={userId} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>

    </motion.div>
  )
}

export default ImageModal;
