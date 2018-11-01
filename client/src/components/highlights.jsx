import React from 'react';
import HighLightChild from './highlightChild.jsx';

function Highlights(props) {
  return (
    <div id="highlights">
      <div>
        <small id="summarymodule_highlights_title">HOME HIGHLIGHTS</small>
        <HighLightChild highlight={props.highlightOne} comment={props.commentOne} />
        <HighLightChild highlight={props.highlightTwo} comment={props.commentTwo} />
        <HighLightChild highlight={props.highlightThree} comment={props.commentThree} />
      </div>
    </div>
  );
}

export default Highlights;
