import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DevInfo from '../../components/Profile/DevInfo/DevInfo';
import updateDevInfoAction from '../../actions/Profile/updateDevInfoAction';
import addUserNameAction from '../../actions/Profile/addUserNameAction';
import addUserLocationAction from '../../actions/Profile/addUserLocationAction';
import addUserImageurlAction from '../../actions/Profile/addUserImageurlAction';
import addUserAvailabilityAction from '../../actions/Profile/addUserAvailabilityAction';
import addUserTitleAction from '../../actions/Profile/addUserTitleAction';
import addUserDescriptionAction from '../../actions/Profile/addUserDescriptionAction';

function mapStateToProps(state) {
  return {
    devName: state.devInfo.name,
    devPicture: state.devInfo.imageurl,
    devPosition: state.devInfo.title,
    devLocation: state.devInfo.location,
    devDesc: state.devInfo.description,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ 
    updateDevInfo: updateDevInfoAction,
    addusername: addUserNameAction,
    adduserlocation: addUserLocationAction,
    adduserimagdevInfo: addUserImageurlAction,
    addusertitle: addUserTitleAction,
    adduserdescription: addUserDescriptionAction,
    adduseravailability: addUserAvailabilityAction, }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DevInfo);
