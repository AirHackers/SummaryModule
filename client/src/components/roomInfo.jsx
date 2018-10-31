import React from 'react';

function RoomInfo(props) {
  return (
    <div id="roominfo">
      <span>{`${props.info} ${props.string}`}</span>
    </div>
  );
}

export default RoomInfo;
