import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from '../../components/Profile/Profile';
import setUserProfileInformationAction from '../../actions/Profile/setUserProfileInformation';
import addTechSkillAction from '../../actions/Profile/addTechSkillAction';

function mapStateToProps(state) {
  return {
    name: state.alluserinfo.name,
    userimg: state.alluserinfo.userimg,
    location: state.alluserinfo.location,
    description: state.alluserinfo.description,
    project: state.alluserinfo.project,
    tech: state.tech,
    title: state.alluserinfo.title,
    availability: state.alluserinfo.availability,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setUserProfileInformation: setUserProfileInformationAction, addtechskill: addTechSkillAction  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);
