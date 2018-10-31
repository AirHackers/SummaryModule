import React from 'react';
import HighLightChild from './highlightChild.jsx';

function Highlights(props) {
  return (
    <div id="highlights">
      <div>
        <small id="summarymodule_highlights_title">HOME HIGHLIGHTS</small>
        <HighLightChild highlight={props.highlightOne} />
        <HighLightChild highlight={props.highlightTwo} />
        <HighLightChild highlight={props.highlightThree} />
      </div>
    </div>
  );
}

export default Highlights;
