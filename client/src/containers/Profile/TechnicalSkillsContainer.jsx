import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TechnicalSkillsComponent from '../../components/Profile/TechnicalSkills';
import updateTechSkillAction from '../../actions/Profile/updateTechSkillAction';

function mapStateToProps(state) {
  return {
    techSkills: state.techSkills,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateTechSkill: updateTechSkillAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TechnicalSkillsComponent);
