import React from 'react';
import DevInfoContainer from '../../containers/Profile/devInfoContainer'
import TechnicalSkillsContainer from '../../containers/Profile/technicalSkillsContainer'
import CurrentProjectsContainer from '../../containers/Profile/CurrentProjectsContainer'
import CompletedProjectsContainer from '../../containers/Profile/CompletedProjectsContainer';

class Profile extends React.Component {

  render() {
    return (
      <div>
        <DevInfoContainer />
        <TechnicalSkillsContainer />
        <CurrentProjectsContainer />
        <CompletedProjectsContainer />
      </div>
    );
  }
}

export default Profile;
