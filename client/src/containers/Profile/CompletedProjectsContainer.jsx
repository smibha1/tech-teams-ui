import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompletedProjects from '../../components/Profile/CompletedProjects';
import completedProjsAction from '../../actions/Profile/updateCompletedProjectsAction';
import updateProjectProfilePageAction from '../../actions/Profile/updateProjectProfilePageAction';

function mapStateToProps(state) {
  return {
    completedProjects: state.completedProjects,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCompletedProjects: completedProjsAction,
    updateProjectProfilePage: updateProjectProfilePageAction,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CompletedProjects);
