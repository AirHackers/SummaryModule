import React from 'react';
import Title from './title.jsx';
import MainBody from './mainBody.jsx';
import SecondBody from './secondBody.jsx';
import Contact from './contact.jsx';
import ComponentBreak from './componentBreak.jsx';
import Amenities from './amenities.jsx';
import AmenitiesModal from './amenitiesModal.jsx';
import SectionHeader from './sectionHeader.jsx';
import SleepingArrangements from './sleepingArrangements.jsx';
import Highlights from './highlights.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: { Amenities: 'preRenderData' },
      showModal: false,
      showModalTwo: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleAmenitiesOpenModal = this.handleAmenitiesOpenModal.bind(this);
    this.handleAmenitiesCloseModal = this.handleAmenitiesCloseModal.bind(this);
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

  // Contact Modal handlers
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

  // Contact Modal handlers
  handleAmenitiesOpenModal() {
    let newState = this.state;
    newState.showModalTwo = true;
    this.setState(newState);
  }

  handleAmenitiesCloseModal() {
    let newState = this.state;
    newState.showModalTwo = false;
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
            image={this.state.home.image}
            name={this.state.home.firstName}
          />
          <Highlights
            highlightOne={this.state.home.HighLightOne}
            highlightTwo={this.state.home.HighLightTwo}
            highlightThree={this.state.home.HighLightThree}
            commentOne={this.state.home.commentOne}
            commentTwo={this.state.home.commentTwo}
            commentThree={this.state.home.commentThree}
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
          <Amenities amenities={this.state.home.Amenities.split(' ')} />
          <AmenitiesModal
            amenities={this.state.home.Amenities.split(' ')}
            showModal={this.state.showModalTwo}
            handleOpenModal={this.handleAmenitiesOpenModal}
            handleCloseModal={this.handleAmenitiesCloseModal}
          />
          <ComponentBreak />
          <SectionHeader header={'Sleeping Arrangements'} />
          <SleepingArrangements bedno={this.state.home.BedNo} />
          <ComponentBreak />
        </div>
      </div>
    );
  }
}

export default App;
