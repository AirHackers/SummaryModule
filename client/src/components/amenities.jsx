import React from 'react';

function Amenities(props) {
  return (
    <div>
      <div className="horizontalDivs">
        <ul>
          {props.amenities.length > 0 ? (
            <li id="summarymodule_amenities">{props.amenities[0]}</li>
          ) : null}
          {props.amenities.length > 2 ? (
            <li id="summarymodule_amenities">{props.amenities[2]}</li>
          ) : null}
          {props.amenities.length > 4 ? (
            <li id="summarymodule_amenities">{props.amenities[4]}</li>
          ) : null}
        </ul>
      </div>
      <div className="horizontalDivs">
        <ul>
          {props.amenities.length > 1 ? (
            <li id="summarymodule_amenities">{props.amenities[1]}</li>
          ) : null}
          {props.amenities.length > 3 ? (
            <li id="summarymodule_amenities">{props.amenities[3]}</li>
          ) : null}
          {props.amenities.length > 5 ? (
            <li id="summarymodule_amenities">{props.amenities[5]}</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
  //}
}

export default Amenities;
