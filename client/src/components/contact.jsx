import React from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#app');

function Contact(props) {
  // using react-modal library. Provides some standard functions like 'onRequestClose'
  // which allows you to close the modal by clicking in the overlay and simple styling options
  // for both the modal and overlay.
  return (
    <div>
      <div id="Hide" onClick={props.handleOpenModal}>
        Contact
      </div>
      <ReactModal
        isOpen={props.showModal}
        contentLabel="Contact"
        onRequestClose={props.handleCloseModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div>Modal text!</div>
      </ReactModal>
    </div>
  );
}

export default Contact;
