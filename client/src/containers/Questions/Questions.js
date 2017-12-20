import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Questions from '../../components/Questions/Questions';

function mapStateToProps(state) {
  return {
    username: state.userInfo.name,
    email: state.userInfo.email,
    password: state.userInfo.password
  };
}


export default connect(mapStateToProps, null)(Questions);
