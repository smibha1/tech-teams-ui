import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Signup from '../../components/Auth/Signup';
import updateSignupAction from '../../actions/Auth/updateSignupAction';


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateSingup: updateSignupAction }, dispatch);
}

export default connect(null, matchDispatchToProps)(Signup);
