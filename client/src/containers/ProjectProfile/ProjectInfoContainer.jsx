import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ProjectInfo from '../../components/ProjectProfile/ProjectInfo';

function mapStateToProps(state) {
  return {
    projectName: 'DevDates',
    projectImage: 'https://d30y9cdsu7xlg0.cloudfront.net/png/219-200.png',
    projectBlurb: 'Helping devs find other devs',
    projectLocation: 'Los Angeles, CA',
    projectDescription: 'INSERT DESCRIPTION HERE',
  };
}

export default connect(mapStateToProps)(ProjectInfo);
