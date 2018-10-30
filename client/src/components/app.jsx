import React from 'react';
import Title from './title.jsx';
import MainBody from './mainBody.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {}
    };
  }

  fetchHome(home, cb) {
    fetch(`http://localhost:3001/home/${home}/data`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        cb(myJson[0]);
      });
  }

  componentDidMount() {
    // reference to specific home listing
    var param = window.location.href.slice(27, -1);
    this.fetchHome(param, val => {
      var newState = this.state;
      newState.home = val;
      this.setState(newState);
    });
  }

  render() {
    return (
      <div id="mainApp">
        <Title
          title={this.state.home.title}
          type={this.state.home.homeType}
          city={this.state.home.city}
          guestno={this.state.home.GuestNo}
          bedroomno={this.state.home.BedroomNo}
          bedno={this.state.home.BedNo}
          bathno={this.state.home.BathNo}
        />
        <MainBody summary={this.state.home.summary} />
      </div>
    );
  }
}

export default App;
