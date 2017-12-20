import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ProjectLinks from '../../components/ProjectProfile/ProjectLinks';

function mapStateToProps(state) {
  return {
    linkedin: 'https://www.linkedin.com',
    slack: 'https://hrla-students.slack.com/',
    github: 'https://www.github.com',
    trello: 'https://www.trello.com',
  };
}

export default connect(mapStateToProps)(ProjectLinks);
