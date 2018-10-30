import React from 'react';

class SecondBody extends React.Component {
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
        <div className="fade">
          <span id="summary">{this.props.moresummary}</span>
          <div onClick={this.handleClick} id="Hide">
            Hide
          </div>{' '}
          <br />
        </div>
      );
    }
    if (this.state.view === 0) {
      return (
        <div onClick={this.handleClick}>
          <div id="Hide">Read more about the space</div> <br />
        </div>
      );
    }
  }
}

export default SecondBody;
