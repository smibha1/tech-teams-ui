import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectInfo from '../../components/ProjectProfile/ProjectInfo';
import updateProjectBlurbAction from '../../actions/ProjectProfile/updateProjectBlurb';
import updateAllOthersAction from '../../actions/ProjectProfile/updateAllOtherEdits';

function mapStateToProps(state) {
  return {
    projectName: state.projectName,
    projectImage: state.projectImage.projectImage,
    projectBlurb: state.projectBlurb,
    projectLocation: state.projectLocation.location,
    projectDescription: state.projectDescription.description,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateProjectBlurb: updateProjectBlurbAction,
    updateAllOthers: updateAllOthersAction,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProjectInfo);
