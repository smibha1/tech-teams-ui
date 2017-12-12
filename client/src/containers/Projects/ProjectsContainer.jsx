// import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ProjectsComponent from '../../components/NavBar/Projects/Projects';
// import updateTechSkillAction from '../../actions/Profile/updateTechSkillAction';

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({ updateTechSkill: updateTechSkillAction }, dispatch);
// }

export default connect(mapStateToProps)(ProjectsComponent);
