import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchUsersResults from '../../components/SearchUsersResults/SearchUsersResults';
import updateUsersResultsAction from '../../actions/SearchProjectsResults/updateProjectsResultsAction';

function mapStateToProps(state) {
  return {
    usersResults: state.usersResults,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateUsersResults: updateUsersResultsAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchUsersResults);

