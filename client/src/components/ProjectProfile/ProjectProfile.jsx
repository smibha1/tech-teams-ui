import React from 'react';
import ProjectInfo from '../../containers/ProjectProfile/ProjectInfoContainer';
import ProjectLinks from '../../containers/ProjectProfile/ProjectLinksContainer';
import ProjectTeam from '../../containers/ProjectProfile/ProjectTeamContainer';
import EditLinks from '../../containers/ProjectProfile/EditLinksContainer';

class ProjectProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkEditMode: false,
    };

    this.toggleEditLink = this.toggleEditLink.bind(this);
    this.exitEditMode = this.exitEditMode.bind(this);
  }

  toggleEditLink() {
    this.setState({ linkEditMode: !this.state.linkEditMode });
  }

  exitEditMode() {
    this.setState({ linkEditMode: !this.state.linkEditMode });
  }

  render() {
    return (
      <div>
        <ProjectInfo /> <br />
        <span> Check us out! </span>
        {
          this.state.linkEditMode ? null :
          <button onClick={this.toggleEditLink}>
            Edit
          </button>
        }
        <br />
        {this.state.linkEditMode ? <EditLinks changeParent={this.exitEditMode} /> : <ProjectLinks />} <br />
        <ProjectTeam />
      </div>

    );
  }
}

export default ProjectProfile;
