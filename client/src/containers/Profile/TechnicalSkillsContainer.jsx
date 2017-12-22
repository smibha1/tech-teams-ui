import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TechnicalSkillsComponent from '../../components/Profile/TechnicalSkills';
import addTechSkillAction from '../../actions/Profile/addTechSkillAction';
import deleteTechSkillAction from '../../actions/Profile/deleteTechSkillAction';

function mapStateToProps(state) {
  return {
    tech: state.tech,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addtechskill: addTechSkillAction, deletetechskill: deleteTechSkillAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TechnicalSkillsComponent);
