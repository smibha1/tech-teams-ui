import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DevInfo from '../../components/Profile/DevInfo/DevInfo';
import updateDevInfoAction from '../../actions/Profile/updateDevInfoAction';

function mapStateToProps(state) {
  return {
    devName: state.devInfo.devName,
    devPicture: state.devInfo.devPicture,
    devPosition: state.devInfo.devPosition,
    devLocation: state.devInfo.devLocation,
    devDesc: state.devInfo.devDesc,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateDevInfo: updateDevInfoAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DevInfo);
