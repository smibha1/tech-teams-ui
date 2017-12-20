import React from 'react';
import ProjectInfo from '../../containers/ProjectProfile/ProjectInfoContainer';

class ProjectProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectLinksEdit: false,
      projectTeamEdit: false,
    };
  }

  render() {
    return (
      <div>
        <ProjectInfo />
        {this.state.projectLinksEdit ? 'EDIT LINKS MODE' : 'DISPLAY LINKS MODE'} <br />
        {this.state.projectTeamEdit ? 'EDIT TEAM MODE' : 'DISPLAY TEAM MODE'} <br />
      </div>

    );
  }
}

export default ProjectProfile;
