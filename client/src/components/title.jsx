import React from 'react';
import RoomInfo from './roomInfo.jsx';

function Title(props) {
  if (props.guestno > 1) {
    var guests = 'guests';
  } else {
    var guests = 'guest';
  }

  if (props.bedroomno > 1) {
    var bedrooms = 'bedrooms';
  } else {
    var bedrooms = 'bedroom';
  }

  if (props.bedno > 1) {
    var beds = 'guests';
  } else {
    var beds = 'guest';
  }

  if (props.bathno > 1) {
    var baths = 'baths';
  } else {
    var baths = 'bath';
  }
  return (
    <div>
      <span id="type">{props.type}</span> <br />
      <h1 id="title">{props.title}</h1> <br />
      <div id="city">{props.city}</div> <br />
      <div>
        <RoomInfo info={props.guestno} string={baths} />
        <RoomInfo info={props.bedroomno} string={bedrooms} />
        <RoomInfo info={props.bedno} string={beds} />
        <RoomInfo info={props.bathno} string={baths} />
      </div>
    </div>
  );
}

export default Title;
