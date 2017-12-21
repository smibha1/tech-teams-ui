import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Questions from '../../components/Questions/Questions';
import updateBasicProfileAction from '../../actions/Questions/updateBasicProfile';

function mapStateToProps(state) {
  console.log('this is the container state', state)
  return {
    username: state.userInfo.name,
    email: state.userInfo.email,
    password: state.userInfo.password,
    userLocation: state.basicprofile.userLocation,
    userDescription: state.basicprofile.userDescription,
    userAvailability: state.basicprofile.userAvailability,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateBasicProfile: updateBasicProfileAction }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Questions);
