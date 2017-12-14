import React from 'react';
import PropTypes from 'prop-types';
import IndividualResult from './IndividualProjectResult';

class SearchProjectsResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // THIS NEEDS TO BE CHANGED ONCE THE NAV SEARCH BAR IS ABLE TO INTERACT WITH REDUX
      search: 'DEVELOPER',
    };
  }

  render() {
    return (
      <div>
        <br />
        <h5> Results for {this.state.search} </h5>
        ---------------------------------------------------- <br />
        {this.props.projectsResults.map((element, index) => (
          <div key={index}>
            <IndividualResult element={element} position={index} />
          </div>
          ))}
      </div>
    );
  }
}

export default SearchProjectsResults;

SearchProjectsResults.propTypes = {
  projectsResults: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
