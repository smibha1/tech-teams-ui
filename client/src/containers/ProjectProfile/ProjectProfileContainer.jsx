import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ProjectProfile from '../../components/ProjectProfile/ProjectProfile';

function mapStateToProps(state) {
  return {
    test: 'test',
  };
}

export default connect(mapStateToProps)(ProjectProfile);
