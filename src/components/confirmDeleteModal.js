// imports
import React, { useState } from 'react';
import { CgTrash } from 'react-icons/cg';
import ManageItems from './manageItems';
import Modal from 'react-modal';

// Styling for the modal
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

Modal.setAppElement('#root'); // for accessibility, prevents screen readers from reading background content by setting what the background is

// function that creates the modal
const ConfirmDeleteModal = ({ method, type, albumName, field, userId, selectedItem, setSelectedItem, selectedAlbum, setSelectedAlbum }) => {
  const [modalIsOpen,setIsOpen] = useState(false); // holds modal status

  // function to open the modal
  function openModal() {
    setIsOpen(true);
  }

  // function to close the modal
  function closeModal(){
    setIsOpen(false);
  }

  // function to handle the sumit and start the deletion of the image or album
  const handleSubmit = () => {
    ManageItems(method, albumName, field, userId, selectedItem, setSelectedItem, selectedAlbum, setSelectedAlbum);
  }

  return (
    // modal
    <>
        {/* Delete Button */}
        <button className="ui red button" id="delete-btn" alt="Delete" onClick={ openModal }><CgTrash /></button>

        {/* Delete Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Delete Image"
        >

          {/* Delete Modal Header */}
          <h2>Delete</h2>

          {/* Delete Modal Form*/}
          <form>
            <p>Are you sure you want to delete this {type}?</p>
          </form>

          {/* Delete Modal Buttons */}
          <button className="ui basic button" onClick={closeModal}>Cancel</button>
          <button className="ui red button" onClick={handleSubmit}>Delete</button>
        </Modal>
        </>
  )
}

export default ConfirmDeleteModal;
