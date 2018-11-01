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
        <div>
          <svg
            viewBox="0 0 24 24"
            role="img"
            aria-label="Close"
            focusable="false"
            id="sumarymodule_contact_close"
            onClick={props.handleCloseModal}
          >
            <path
              d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
              fillRule="evenodd"
            />
          </svg>
          <div>
            <div>
              <h2 id="sumarymodule_contact_text">Log in to continue</h2>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default Contact;
