import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../components/Auth/Login';
import updateLoginInfoAction from '../../actions/Auth/updateLoginInfoAction';


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateLoginInfo: updateLoginInfoAction }, dispatch);
}

export default connect(matchDispatchToProps)(Login);
