import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const DevInfoDisplay = props => {
  return (
    <div id="profileInfo-container">
      <img id="profileImg" src={props.info.devPicture} alt={props.info.devName} height="150"/>
      <div id="profileUsername">{props.info.devName}</div>
        {props.info.devPosition} || {props.info.devLocation} <br/>
        {props.info.devDesc}      
    </div>
  )
}

export default DevInfoDisplay;

DevInfoDisplay.propTypes = {
  info: PropTypes.oneOfType([PropTypes.object]).isRequired
};
