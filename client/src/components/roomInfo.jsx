import React from 'react';

function RoomInfo(props) {
  if (props.string === 'guests') {
    var glyph = '󰄂';
  } else if (props.string === 'bedrooms') {
    var glyph = '󰄄';
  } else if (props.string === 'beds') {
    var glyph = '󰄃';
  } else if (props.string === 'baths') {
    var glyph = '󰄁';
  }

  return (
    <div id="roominfo">
      <span className="summary_module_roominfo">{glyph}</span>
      <span>{`${props.info} ${props.string}`}</span>
    </div>
  );
}

export default RoomInfo;
