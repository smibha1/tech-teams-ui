import React from 'react';
import ProjectInfo from '../../containers/ProjectProfile/ProjectInfoContainer';
import ProjectLinks from '../../containers/ProjectProfile/ProjectLinksContainer';
import ProjectTeam from '../../containers/ProjectProfile/ProjectTeamContainer';
import EditLinks from '../../containers/ProjectProfile/EditLinksContainer';
import axios from 'axios';

class ProjectProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkEditMode: false,
      random: 0,
    };

    this.toggleEditLink = this.toggleEditLink.bind(this);
    this.exitEditMode = this.exitEditMode.bind(this);
  }

  componentWillMount() {
    axios({
      method: 'post',
      url: 'http://localhost:3000/getproject',
      data: {
        name: this.props.projectName,
      }
    })
      .then((data) => {
        this.props.updateProjectBlurb(data.data.pinfo.description);
        let websitesArr = JSON.parse(data.data.pinfo.websites);
        this.props.updateLinks({
          linkedin: websitesArr[1],
          slack: websitesArr[2],
          github: websitesArr[3],
          trello: websitesArr[4],
        });
        console.log(data)
        this.props.updateAllOthers({
          location: data.data.pinfo.headquarters,
          description: 'WHAT IS DESCRIPTION?',
          projectImage: data.data.pinfo.imageurl, 
        });

        this.props.updateProjectTeam({
          projectTeam: data.data.positions,
        })
      })
      .catch( err => console.log(err))
  // END AXIOS REQUEST
  }

  toggleEditLink() {
    this.setState({ linkEditMode: !this.state.linkEditMode });
  }

  exitEditMode() {
    this.setState({ linkEditMode: !this.state.linkEditMode });
  }

  render() {
    return (
      <div id="projectEntireProject-contatiner">
      <div id="projectEntireProject-innerContainer">
        <ProjectInfo /> <br />
    <div id="projectSocialMedia-innercontainer">
        <span id="projectText"> Check us out! </span>
        <div id="newdivider"></div>
        
        {
          this.state.linkEditMode ? null :
          <button onClick={this.toggleEditLink}>
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
        }
        <br />
       
        {this.state.linkEditMode ? <EditLinks changeParent={this.exitEditMode} /> : <ProjectLinks />} <br />
        </div>
        <ProjectTeam />
        </div>
      </div>

    );
  }
}

export default ProjectProfile;
