import React from 'react';
import PropTypes from 'prop-types';

const DevInfoDisplay = props => (
  <div id="profileInfo-container">
    <img id="profileImg" src={props.info.devPicture} alt={props.info.devName} height="200" /> <br />
    <div id="profileUsername"> {props.info.devName} </div> <br />
    {props.info.devPosition} || {props.info.devLocation} <br />
    <div id="divider"> </div>

    {props.info.devDesc}
  </div>

);

export default DevInfoDisplay;

DevInfoDisplay.propTypes = {
  info: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
