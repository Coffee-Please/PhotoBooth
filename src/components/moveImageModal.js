// imports
import React, { useState } from 'react';
import ManageItems from './manageItems';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root'); // for accessibility, prevents screen readers from reading background content

// function that creates the modal
const MoveImageModal = ({ method, field, userId, selectedImage, setSelectedImage }) => {

  const [albumName, setAlbumName] = useState(null);
  const [modalIsOpen,setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  // Updates values with changes to input fields
  const handleChange = (e) => {
    var value = e.target.value;
    console.log(value);

    if(value == "") {
      setAlbumName(null);
    } else {
      setAlbumName(value);
     }
  };

  const handleSubmit = () => {
    ManageItems(method, albumName, field, userId, selectedImage, setSelectedImage);
  }

  return (
    // modal
    <>
        <button className="ui button" onClick={openModal}>Change Album to...</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Change Album"
        >

          <h2>Change Album to...</h2>
          <form>
            <input type='text' style={{ margin: '50px' }} placeholder="Enter a album name..." name="albumName" value={albumName} onChange={handleChange} maxLength="20" required />
            <p>NOTE: Leaving the name empty will remove the image from it's current album.</p>
          </form>

          <button className="ui basic button" onClick={closeModal}>Cancel</button>
          <button className="ui button" onClick={handleSubmit}>Change</button>
        </Modal>
        </>
  )
}

export default MoveImageModal;
