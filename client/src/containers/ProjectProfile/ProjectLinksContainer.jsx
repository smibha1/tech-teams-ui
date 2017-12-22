import { connect } from 'react-redux';
import _ from 'lodash';
// import { bindActionCreators } from 'redux';
import ProjectLinks from '../../components/ProjectProfile/ProjectLinks';

function mapStateToProps(state) {
  console.log('state.links=  ', state.links)
  const linksObj = {};
  _.each(state.links, (value, key) => {
    linksObj[key] = value;
  });
  console.log('linksObj=  ', linksObj)

  return {
    // links: state.links,
    // links: linksObj
    links: Object.assign({}, linksObj),
  };
}

export default connect(mapStateToProps)(ProjectLinks);
