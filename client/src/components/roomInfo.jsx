import React from 'react';

function RoomInfo(props) {
  if (props.string === 'guests' || props.string === 'guest') {
    var glyph = '󰄂';
  } else if (props.string === 'bedrooms' || props.string === 'bedroom') {
    var glyph = '󰄄';
  } else if (props.string === 'beds' || props.string === 'bed') {
    var glyph = '󰄃';
  } else if (props.string === 'baths' || props.string === 'baths') {
    var glyph = '󰄁';
  }

  return (
    <div id="roominfo">
      <span className="summary_module_roominfo">{glyph}</span>
      <span id="roomInfoText">{`${props.info} ${props.string}`}</span>
    </div>
  );
}

export default RoomInfo;
