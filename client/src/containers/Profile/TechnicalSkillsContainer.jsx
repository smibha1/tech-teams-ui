import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TechnicalSkillsComponent from '../../components/Profile/TechnicalSkills';
import saveNewSkill from '../../actions/Profile/saveNewSkillAction';

function mapStateToProps(state) {
  return {
    techSkills: state.techSkills,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ saveNewSkill: saveNewSkill }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TechnicalSkillsComponent);
