import React from 'react';
import PropTypes from 'prop-types';

const DevInfoDisplay = props => {
  return (<div id="profileInfo-container">
    <h2>Here is the dev info</h2>

    {
      // <img id="profileImg" src={this.props.userPicture} alt={this.props.userName} height="200"/>
      // <br/>
      // <div id="profileUsername">{this.props.userName}</div>
      // <br/> {this.props.userPosition} || {this.props.userLocation} <br/>
      // <div id="divider">{this.props.userDescription}</div>
      // {this.props.userAvailability}
    }
  </div>)
}

export default DevInfoDisplay;

DevInfoDisplay.propTypes = {
  info: PropTypes.oneOfType([PropTypes.object]).isRequired
};
