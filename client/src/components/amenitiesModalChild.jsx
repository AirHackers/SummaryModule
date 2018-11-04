import React from 'react';

function AmenitiesModalChild(props) {
  return (
    <div>
      <div>
        <div id="summarymodule_amenities_insideModal_text">{props.amenity}</div>
        <div id="summarymodule_amenities_insideModal_description">
          <div>{props.amenity + props.amenity}</div>
        </div>
      </div>
      <div>
        <div id="summarymodule_amenities_insideModal_break" />
      </div>
    </div>
  );
}

export default AmenitiesModalChild;
