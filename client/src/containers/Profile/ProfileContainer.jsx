import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from '../../components/Profile/Profile';
import setUserProfileInformationAction from '../../actions/Profile/setUserProfileInformation';
import addTechSkillAction from '../../actions/Profile/addTechSkillAction';
import addUserNameAction from '../../actions/Profile/addUserNameAction';
import addUserLocationAction from '../../actions/Profile/addUserLocationAction';
import addUserImageurlAction from '../../actions/Profile/addUserImageurlAction';
import addUserAvailabilityAction from '../../actions/Profile/addUserAvailabilityAction';
import addUserTitleAction from '../../actions/Profile/addUserTitleAction';
import addUserDescriptionAction from '../../actions/Profile/addUserDescriptionAction';
import updateDevInfoAction from '../../actions/Profile/updateDevInfoAction';
import updateCurrentProjectsAction from '../../actions/Profile/updateCurrentProjectsAction';


function mapStateToProps(state) {
  return {
    name: state.name,
    imageurl: state.image,
    location: state.location,
    description: state.description,
    project: state.project,
    tech: state.tech,
    title: state.title,
    availability: state.availability,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ 
    updateDevInfo: updateDevInfoAction,
    setUserProfileInformation: setUserProfileInformationAction, 
    addtechskill: addTechSkillAction,
    addusername: addUserNameAction,
    adduserlocation: addUserLocationAction,
    adduserimageurl: addUserImageurlAction,
    addusertitle: addUserTitleAction,
    adduserdescription: addUserDescriptionAction,
    adduseravailability: addUserAvailabilityAction,
    updateCurrentProjects: updateCurrentProjectsAction,
    updateTechSkill: addTechSkillAction,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);
