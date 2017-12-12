import React from 'react';
import DevInfoContainer from '../../containers/Profile/DevInfoContainer';
import TechnicalSkillsContainer from '../../containers/Profile/TechnicalSkillsContainer';
// import CurrentProjectsContainer from '../../containers/Profile/CurrentProjectsContainer';
// import CompletedProjectsContainer from '../../containers/Profile/CompletedProjectsContainer';

const Profile = () => (
  <div>
    <DevInfoContainer />
    <br />
    <TechnicalSkillsContainer />
    <br />
    {/* <CurrentProjectsContainer />
    <br />
    <CompletedProjectsContainer /> */}
  </div>
);

export default Profile;
