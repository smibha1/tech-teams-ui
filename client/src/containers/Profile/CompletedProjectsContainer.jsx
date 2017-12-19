import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompletedProjects from '../../components/Profile/CompletedProjects';
import completedProjsAction from '../../actions/Profile/updateCompletedProjectsAction';

function mapStateToProps(state) {
  return {
    completedProjects: state.completedProjects,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateCompletedProjects: completedProjsAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CompletedProjects);
