import React from 'react';

const hiddenText = 0,
  unHiddenText = 1;

class SecondBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: hiddenText
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.view === hiddenText) {
      this.setState({
        view: unHiddenText
      });
    } else {
      this.setState({
        view: hiddenText
      });
    }
  }

  render() {
    if (this.state.view === unHiddenText) {
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
    if (this.state.view === hiddenText) {
      return (
        <div onClick={this.handleClick}>
          <div id="Hide">Read more about the space</div> <br />
        </div>
      );
    }
  }
}

export default SecondBody;
