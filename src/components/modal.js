// imports
import React from 'react';


// function that creates the modal
const Modal = ({ selectedImage, setSelectedImage }) => {

  // function to close the modal
  const handleClick = (e) => {
    // check if the backdrop is clicked
    if(e.target.classList.contains('backdrop')) {
      setSelectedImage(null);
    }
  }

  return (
    // modal
    <div className="backdrop" onClick={handleClick}>
      <img src={ selectedImage } alt="enlarged pic" />
    </div>
  )

}

export default Modal;
