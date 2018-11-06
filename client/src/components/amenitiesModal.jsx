import React from 'react';
import ReactModal from 'react-modal';
import AmenitiesModalChild from './amenitiesModalChild.jsx';

function AmenitiesModal(props) {
  // using react-modal library. Provides some standard functions like 'onRequestClose'
  // which allows you to close the modal by clicking in the overlay and simple styling options
  // for both the modal and overlay.
  return (
    <div>
      <div id="Hide" className="openAmenitiesModal" onClick={props.handleOpenModal}>
        {`Show all ${props.amenities.length} amenities`}
      </div>
      <ReactModal
        isOpen={props.showModal}
        contentLabel="Contact"
        onRequestClose={props.handleCloseModal}
        className="summary_amenities_modal"
        overlayClassName="summary_amenities_overlay"
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
              <h2 id="sumarymodule_contact_text">Amenities</h2>
              <h2 id="sumarymodule_contact_text_small">Basic</h2>
              {props.amenities.map((ele, i) => {
                return <AmenitiesModalChild key={i} amenity={ele} />;
              })}
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default AmenitiesModal;
