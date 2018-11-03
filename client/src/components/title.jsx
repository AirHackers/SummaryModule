import React from 'react';
import RoomInfo from './roomInfo.jsx';

function Title(props) {
  const guests = props.guestno > 1 ? 'guests' : 'guest';
  const bedrooms = props.bedroomno > 1 ? 'bedrooms' : 'bedroom';
  const beds = props.bedno > 1 ? 'beds' : 'bed';
  const baths = props.bathno > 1 ? 'baths' : 'bath';

  return (
    <div>
      <div>
        <span id="type">{props.type}</span> <br />
        <div className="test">
          <div id="image">
            <img src={props.image} id="image" />
          </div>
          <div id="title_name">{props.name}</div>
        </div>
        <h1 id="title">{props.title}</h1> <br />
        <div id="city">{props.city}</div> <br />
      </div>

      <div>
        <RoomInfo info={props.guestno} string={guests} />
        <RoomInfo info={props.bedroomno} string={bedrooms} />
        <RoomInfo info={props.bedno} string={beds} />
        <RoomInfo info={props.bathno} string={baths} />
      </div>
    </div>
  );
}

export default Title;
