import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CurrentProjects from '../../components/Profile/CurrentProjects';
import updateCurrentProjectsAction from '../../actions/Profile/updateCurrentProjectsAction';
import updateProjectProfilePageAction from '../../actions/Profile/updateProjectProfilePageAction';

function mapStateToProps(state) {
  return {
    currentProjects: state.currentProjects,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCurrentProjects: updateCurrentProjectsAction,
    updateProjectProfilePage: updateProjectProfilePageAction,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CurrentProjects);
