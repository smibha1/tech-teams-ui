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

  componentDidMount() {
    console.log('am i first?')
  }

  componentWillMount() {
    console.log('hey CWM in projectprofile');
    axios({
      method: 'post',
      url: 'http://localhost:3000/getproject',
      data: {
        name: 'A New Life',
      }
    })
      .then((data) => {
        console.log('AXIOS DATA: ', data.data.pinfo)
        this.props.updateProjectBlurb(data.data.pinfo.description);
        let websitesArr = JSON.parse(data.data.pinfo.websites);
        this.props.updateLinks({
          linkedin: websitesArr[1],
          slack: websitesArr[2],
          github: websitesArr[3],
          trello: websitesArr[4],
        });
        this.props.updateAllOthers({
          location: data.data.pinfo.headquarters,
          description: 'WHAT IS DESCRIPTION?',
          projectImage: data.data.pinfo.imageurl, 
        });
        console.log('are we in this last .then shit')
        // this.setState({random: 1}, () => console.log(this.state));
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
    console.log('this.props= ', this.props)
    console.log('this.state= ', this.state)
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
