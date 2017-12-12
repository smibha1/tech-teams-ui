import React from 'react';
import PropTypes from 'prop-types';

const DevInfoDisplay = props => (
  <div>
    <img src={props.info.devPicture} alt={props.info.devName} height="200" /> <br />
    {props.info.devName} <br />
    {props.info.devPosition} || {props.info.devLocation} <br />
    ------------------------- <br />
    {props.info.devDesc}
  </div>

);

export default DevInfoDisplay;

DevInfoDisplay.propTypes = {
  info: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
