// imports
import React, { setState } from 'react';
import { motion } from 'framer-motion';
import { CgTrash } from 'react-icons/cg';
import { useSession } from "./../firebase/userProvider";
import { photoBoothFirestore } from './../firebase/config';
import DeleteItem from './deleteItems';


// function that creates the modal
const Modal = ({ selectedImage, setSelectedImage }) => {
  const { user } = useSession(); // get the user info
  const userId = user.uid; // set the user id for passing to delete method if needed
  const field = 'url';

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
      <motion.img src={ selectedImage } alt="enlarged pic" initial={{ y: "-100vh" }} animate={{ y: 0 }}/>

      {/* delete image button */}
      <button className="ui red button" onClick={() => { DeleteItem(field, userId, selectedImage, setSelectedImage) } }><CgTrash /> Delete</button>
    </motion.div>
  )
}

export default Modal;
