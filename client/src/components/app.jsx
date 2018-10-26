import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {}
    };
  }

  fetchHome(cb) {
    fetch('http://localhost:3001/home/2')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        cb(myJson[0]);
      });
  }

  componentDidMount() {
    this.fetchHome(val => {
      var newState = this.state;
      newState.home = val;
      this.setState(newState);
    });
  }

  render() {
    return <div>{this.state.home.summary}</div>;
  }
}

export default App;
