import React from 'react';
import ProjectInfo from '../../containers/ProjectProfile/ProjectInfoContainer';
import ProjectLinks from '../../containers/ProjectProfile/ProjectLinksContainer';

class ProjectProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTeamEdit: false,
    };
  }

  render() {
    return (
      <div>
        <ProjectInfo /> <br />
        Check us out! <br />
        <ProjectLinks /> <br />
        {this.state.projectTeamEdit ? 'EDIT TEAM MODE' : 'DISPLAY TEAM MODE'} <br />
      </div>

    );
  }
}

export default ProjectProfile;
