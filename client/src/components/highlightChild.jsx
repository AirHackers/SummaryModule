import React from 'react';

class HighLightChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.view === 0) {
      this.setState({
        view: 1
      });
    } else {
      this.setState({
        view: 0
      });
    }
  }

  render() {
    if (this.state.view === 1) {
      return (
        <div onClick={this.handleClick}>
          <div>
            <span>Test * </span>
            <span>{this.props.highlight}</span>
          </div>
        </div>
      );
    }
    if (this.state.view === 0) {
      return (
        <div onClick={this.handleClick}>
          <div>
            <span>Test2 * </span>
            <span>{this.props.highlight}</span>
          </div>
        </div>
      );
    }
  }
}

export default HighLightChild;
