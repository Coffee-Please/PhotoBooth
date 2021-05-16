// imports
import React, { useState } from 'react';
import ManageItems from './manageItems';
import { BiDotsVerticalRounded } from 'react-icons/bi';
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
const ChangeAlbumNameModal = ({ method, field, userId, selectedAlbum, setSelectedAlbum }) => {

  const [newalbumName, setNewAlbumName] = useState(null);
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

    if(value == "") {
      setNewAlbumName(null);
    } else {
      setNewAlbumName(value);
     }
  };

  const handleSubmit = () => {
    ManageItems(method, newalbumName, field, userId, selectedAlbum, setSelectedAlbum, null, null);
  }

  return (
    // modal
    <>
        <button className="ui button" id="rename-btn" onClick={openModal}><BiDotsVerticalRounded /></button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Change Album Name"
        >

          <h2>Change Album Name to...</h2>
          <form>
            <input type='text' style={{ margin: '50px' }} placeholder="Enter a new album name..." name="newalbumName" value={newalbumName} onChange={handleChange} maxLength="20" required />
          </form>

          <button className="ui basic button" onClick={closeModal}>Cancel</button>
          <button className="ui button" onClick={handleSubmit}>Change</button>
        </Modal>
        </>
  )
}

export default ChangeAlbumNameModal;
