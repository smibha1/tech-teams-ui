import { connect } from 'react-redux';
import _ from 'lodash';
// import { bindActionCreators } from 'redux';
import ProjectLinks from '../../components/ProjectProfile/ProjectLinks';

function mapStateToProps(state) {
  const linksObj = {};
  _.each(state.links, (value, key) => {
    linksObj[key] = value;
  });

  return {
    // links: state.links,
    // links: linksObj
    links: Object.assign({}, linksObj),
  };
}

export default connect(mapStateToProps)(ProjectLinks);
