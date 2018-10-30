import React from 'react';

function Amenities(props) {
  return (
    <div>
      <ul>
        <li>{props.amOne}</li>
        <li>{props.amTwo}</li>
        <li>{props.amThree}</li>
        <li>{props.amFour}</li>
      </ul>
    </div>
  );
}

export default Amenities;
