// imports
import React from 'react';
import { motion } from 'framer-motion';


// function that creates the modal
const Modal = ({ selectedImage, setSelectedImage }) => {

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
      <motion.img src={ selectedImage } alt="enlarged pic" initial={{ y: "-100vh" }} animate={{ y: 0 }}/>
    </motion.div>
  )

}

export default Modal;
