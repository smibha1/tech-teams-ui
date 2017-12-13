import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CurrentProjects from '../../components/Profile/CurrentProjects';
import updateCurrentProjectsReducer from '../../reducers/Profile/updateCurrentProjects';

function mapStateToProps(state) {
  return {
    currentProjects: state.currentProjects,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateCurrentProjects: updateCurrentProjectsReducer }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CurrentProjects);
