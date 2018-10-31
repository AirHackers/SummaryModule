import React from 'react';
import Title from './title.jsx';
import MainBody from './mainBody.jsx';
import SecondBody from './secondBody.jsx';
import Contact from './contact.jsx';
import ComponentBreak from './componentBreak.jsx';
import Amenities from './amenities.jsx';
import SectionHeader from './sectionHeader.jsx';
import SleepingArrangements from './sleepingArrangements.jsx';
import Highlights from './highlights.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {},
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  // modal code
  handleOpenModal() {
    let newState = this.state;
    newState.showModal = true;
    this.setState(newState);
  }

  handleCloseModal() {
    let newState = this.state;
    newState.showModal = false;
    this.setState(newState);
  }

  render() {
    return (
      <div>
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
          <Highlights />
          <MainBody summary={this.state.home.summary} /> <br />
          <SecondBody moresummary={this.state.home.moreSummary} />
          <Contact
            showModal={this.state.showModal}
            handleOpenModal={this.handleOpenModal}
            handleCloseModal={this.handleCloseModal}
          />
          <ComponentBreak />
          <SectionHeader header={'Amenities'} />
          <Amenities
            amOne={this.state.home.AmenityOne}
            amTwo={this.state.home.AmenityTwo}
            amThree={this.state.home.AmenityThree}
            amFour={this.state.home.AmenityFour}
          />
          <ComponentBreak />
          <SectionHeader header={'Sleeping Arrangements'} />
          <SleepingArrangements />
        </div>
      </div>
    );
  }
}

export default App;
