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

  // fetch call to get all data from mysql db. Utilized callback to maintain state with retried data.

  fetchHome() {
    const param = window.location.href.slice(27, -1);
    let context = this;
    fetch(`http://localhost:3001/home/${param}/data`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        let newState = context.state;
        newState.home = myJson[0];
        context.setState(newState);
      });
  }

  componentDidMount() {
    this.fetchHome();
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
          <Highlights
            highlightOne={this.state.home.HighLightOne}
            highlightTwo={this.state.home.HighLightTwo}
            highlightThree={this.state.home.HighLightThree}
          />
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
