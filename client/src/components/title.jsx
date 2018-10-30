import React from 'react';
import RoomInfo from './roomInfo.jsx';

function Title(props) {
  return (
    <div>
      <span id="type">{props.type}</span> <br />
      <h1 id="title">{props.title}</h1> <br />
      <div id="city">{props.city}</div> <br />
      <div>
        <RoomInfo info={props.guestno} string={'guests'} />
        <RoomInfo info={props.bedroomno} string={'bedrooms'} />
        <RoomInfo info={props.bedno} string={'beds'} />
        <RoomInfo info={props.bathno} string={'bath'} />
      </div>
    </div>
  );
}

export default Title;
