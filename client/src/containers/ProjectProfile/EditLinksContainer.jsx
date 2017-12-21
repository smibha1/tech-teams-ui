import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditLinks from '../../components/ProjectProfile/EditLinks';
import updateLinksAction from '../../actions/ProjectProfile/updateLinksAction';

function mapStateToProps(state) {
  return {
    links: state.links,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateLinks: updateLinksAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EditLinks);
