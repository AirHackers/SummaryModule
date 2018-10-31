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
          <div>
            <span>Clicked * </span>
            <span>{this.props.highlight}</span>
          </div>
        </div>
      );
    }
    if (this.state.view === unclicked) {
      return (
        <div onClick={this.handleClick}>
          <div>
            <span>Unclicked * </span>
            <span>{this.props.highlight}</span>
          </div>
        </div>
      );
    }
  }
}

export default HighLightChild;
