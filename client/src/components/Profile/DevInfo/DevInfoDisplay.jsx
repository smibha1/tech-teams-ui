import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class DevInfoDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      userPicture: '',
      userName: '',
      userPosition: '',
      userLocation: '',
      userDescription: '',
      userAvailability: ''
    }
  }

  componentWillMount() {
    // axios({
    // get prolife mofo
    // jwtDecode(token) for Email
    // send that shit in obj;
    // ask for user shit

        // })


  }

  render() {
    return (<div id="profileInfo-container">
      <img id="profileImg" src={this.state.userPicture} alt={this.state.userName} height="200"/>
      <br/>
      <div id="profileUsername">
        {this.state.userName}
      </div>
      <br/> {this.state.userPosition}
      || {this.state.userLocation}
      <br/>
      <div id="divider">
        {this.state.userDescription}

      </div>
        {this.state.userAvailability}
    </div>)

  }
}


export default DevInfoDisplay;

DevInfoDisplay.propTypes = {
  info: PropTypes.oneOfType([PropTypes.object]).isRequired
};
