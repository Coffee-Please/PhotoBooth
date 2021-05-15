// imports
import React, { setState, useState } from 'react';
import { CgTrash } from 'react-icons/cg';
import ManageItems from './manageItems';
import Modal from 'react-modal';
import { useSession } from "./../firebase/userProvider";

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
const ConfirmDeleteModal = ({ field, userId, selectedImage, setSelectedImage }) => {
  const [modalIsOpen,setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  const handleSubmit = () => {
    ManageItems('delete', null, field, userId, selectedImage, setSelectedImage);
  }

  return (
    // modal
    <>
        <button className="ui red button" onClick={ openModal }><CgTrash /> Delete</button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Delete Image"
        >

          <h2>Delete Image</h2>
          <form>
            <p>Are you sure you want to delete this item?</p>
          </form>

          <button className="ui basic red button" onClick={closeModal}>Cancel</button>
          <button className="ui red button" onClick={handleSubmit}>Delete</button>
        </Modal>
        </>
  )
}

export default ConfirmDeleteModal;
