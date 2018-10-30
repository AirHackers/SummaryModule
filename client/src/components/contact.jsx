import React from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#app');

function Contact(props) {
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
