import React from 'react';
import ProjectInfo from '../../containers/ProjectProfile/ProjectInfoContainer';
import ProjectLinks from '../../containers/ProjectProfile/ProjectLinksContainer';
import ProjectTeam from '../../containers/ProjectProfile/ProjectTeamContainer';

class ProjectProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ProjectInfo /> <br />
        Check us out! <br />
        <ProjectLinks /> <br />
        <ProjectTeam />
      </div>

    );
  }
}

export default ProjectProfile;
