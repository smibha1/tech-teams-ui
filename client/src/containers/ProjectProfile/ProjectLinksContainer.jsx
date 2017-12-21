import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ProjectLinks from '../../components/ProjectProfile/ProjectLinks';

function mapStateToProps(state) {
  return {
    links: state.links,
  };
}

export default connect(mapStateToProps)(ProjectLinks);
