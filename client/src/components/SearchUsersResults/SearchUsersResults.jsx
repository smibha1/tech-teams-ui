import React from 'react';
import PropTypes from 'prop-types';
import IndividualUserResult from './IndividualUserResult';

class SearchUsersResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // THIS NEEDS TO BE CHANGED ONCE THE NAV SEARCH BAR IS ABLE TO INTERACT WITH REDUX
      search: 'SHANIQUA',
    };
  }

  render() {
    return (
      <div>
        <br />
        <h5> Results for {this.state.search} </h5>
        ---------------------------------------------------- <br />
        {this.props.usersResults.map((element, index) => (
          <div key={index}>
            <IndividualUserResult element={element} position={index} />
          </div>
          ))}
      </div>
    );
  }
}

export default SearchUsersResults;

SearchUsersResults.propTypes = {
  usersResults: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
};
