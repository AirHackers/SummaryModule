import React from 'react';

const unclicked = 0,
  clicked = 1;

class HighLightChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: unclicked
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.view === unclicked) {
      this.setState({
        view: clicked
      });
    }
  }

  render() {
    if (this.state.view === clicked) {
      return (
        <div>
          <div id="summarymodule_twelve_eight">
            <span id="summarymodule_highlights_comment">{this.props.comment} · </span>
            <span>{this.props.highlight}</span>
          </div>
          <div id="summarymodule_highlights_buttons">
            <span>Thanks for your feedback.</span>
          </div>
        </div>
      );
    }
    if (this.state.view === unclicked) {
      return (
        <div>
          <div id="summarymodule_twelve_eight">
            <span id="summarymodule_highlights_comment">{this.props.comment} · </span>
            <span>{this.props.highlight}</span>
          </div>
          <div id="summarymodule_highlights_buttons" onClick={this.handleClick}>
            <span>Helpful · </span>
            <span>Not Helpful</span>
          </div>
        </div>
      );
    }
  }
}

export default HighLightChild;
