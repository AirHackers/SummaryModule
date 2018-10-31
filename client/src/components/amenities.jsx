import React from 'react';

function Amenities(props) {
  return (
    <div id="summarymodule_amenities">
      <ul>
        <li id="summarymodule_amenities">{props.amOne}</li>
        <li id="summarymodule_amenities">{props.amTwo}</li>
        <li id="summarymodule_amenities">{props.amThree}</li>
        <li id="summarymodule_amenities">{props.amFour}</li>
      </ul>
    </div>
  );
}

export default Amenities;
