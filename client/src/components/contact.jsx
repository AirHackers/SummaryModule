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
              <button type="submit" id="summarymodule_contact_google">
                <span>
                  <div id="summarymodule_contact_google_container">
                    <div>
                      <svg
                        viewBox="0 0 18 18"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                        id="summarymodule_contact_google_svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                            fill="#EA4335"
                          />
                          <path
                            d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                            fill="#4285F4"
                          />
                          <path
                            d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                            fill="#34A853"
                          />
                          <path d="M0 0h18v18H0V0z" />
                        </g>
                      </svg>
                      <div id="summarymodule_contact_google_text">Log in with Google</div>
                    </div>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default Contact;
